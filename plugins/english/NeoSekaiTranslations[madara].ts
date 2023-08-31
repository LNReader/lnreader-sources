
import { load as parseHTML } from "cheerio";
import { fetchFile, fetchApi } from "@libs/fetch";
import { Novel, Plugin, Chapter } from "@typings/plugin";
import { FilterInputs } from "@libs/filterInputs";
import { defaultCover } from "@libs/defaultCover";
import { NovelStatus } from "@libs/novelStatus"
import { parseMadaraDate } from "@libs/parseMadaraDate";
import dayjs from "dayjs";

export const id = "neosekaiTLS";
export const name = "NeoSekai Translations [madara]";
export const icon = "multisrc/madara/icons/neosekaitranslations.png";
export const version = "1.0.0";
export const site = "https://www.neosekaitranslations.com/";
const baseUrl = site;

export const popularNovels: Plugin.popularNovels = async (pageNo, {filters, showLatestNovels}) => {
    const novels: Novel.Item[] = [];

    let url = site + (filters?.genres ? "novel-genre/" + filters.genres + '/' : "novel/");

    url += '/page/' + pageNo + '/' + 
        '?m_orderby=' + (showLatestNovels ? 'latest' : (filters?.sort || 'rating'));

    const body = await fetchApi(url).then(res => res.text());

    const loadedCheerio = parseHTML(body);

    loadedCheerio('.manga-title-badges').remove();

    loadedCheerio('.page-item-detail').each(function () {
    const novelName = loadedCheerio(this).find('.post-title').text().trim();
    let image = loadedCheerio(this).find('img');
    const novelCover = image.attr('data-src') || image.attr('src');

    let novelUrl = loadedCheerio(this).find('.post-title')
        .find('a')
        .attr('href') || '';
    const novel: Novel.Item = {
        name: novelName,
        cover: novelCover,
        url: novelUrl,
    };

    novels.push(novel);
    });

    return novels;
};

export const parseNovelAndChapters: Plugin.parseNovelAndChapters = async (
    novelUrl
) => {
    const novel: Novel.instance = {
        url: novelUrl,
    };

    const body = await fetchApi(novelUrl).then(res => res.text());

    let loadedCheerio = parseHTML(body);

    loadedCheerio('.manga-title-badges').remove();

    novel.name = loadedCheerio('.post-title h1').text().trim();

    novel.cover =
    loadedCheerio('.summary_image > a > img').attr('data-lazy-src') ||
    loadedCheerio('.summary_image > a > img').attr('data-src') ||
    loadedCheerio('.summary_image > a > img').attr('src') ||
    defaultCover;

    loadedCheerio('.post-content_item, .post-content').each(function () {
    const detailName = loadedCheerio(this).find('h5').text().trim();
    const detail = loadedCheerio(this).find('.summary-content').text().trim();

    switch (detailName) {
        case 'Genre(s)':
        case 'التصنيفات':
            novel.genres = detail.replace(/[\t\n]/g, ',');
            break;
        case 'Author(s)':
        case 'المؤلف':
        case 'المؤلف (ين)':
            novel.author = detail;
            break;
        case 'Status':
        case 'الحالة':
            novel.status =
                detail.includes('OnGoing') || detail.includes('مستمرة')
                ? NovelStatus.Ongoing
                : NovelStatus.Completed;
            break;
    }
    });

    loadedCheerio('div.summary__content .code-block,script').remove();
    novel.summary = loadedCheerio('div.summary__content').text().trim();


    let html;

    if (false) {
        const novelId =
            loadedCheerio('.rating-post-id').attr('value') ||
            loadedCheerio('#manga-chapters-holder').attr('data-id') || '';

        const body = {
            action: "manga_get_chapters",
            manga: novelId,
        }
        html = await fetchApi(
            baseUrl + 'wp-admin/admin-ajax.php',
            {
            method: 'POST',
            body: JSON.stringify(body),
            })
            .then(res => res.text());
    } else {
        html = await fetchApi(
        baseUrl + 'ajax/chapters/',
        { method: 'POST' })
        .then(res => res.text());
    }

    if (html !== '0') {
        loadedCheerio = parseHTML(html);
    }

    const chapters: Chapter.Item[] = [];
    loadedCheerio('.wp-manga-chapter').each(function () {
        const chapterName = loadedCheerio(this).find('a').text().trim();

        let releaseDate = null;
        releaseDate = loadedCheerio(this)
            .find('span.chapter-release-date')
            .text()
            .trim();

        if (releaseDate) {
            releaseDate = parseMadaraDate(releaseDate);
        } else {
            /**
             * Insert current date
             */

            releaseDate = dayjs().format('LL');
        }

        let chapterUrl = loadedCheerio(this).find('a').attr('href') || '';

        chapters.push({ name: chapterName, releaseTime: releaseDate, url: chapterUrl });
    });

    novel.chapters = chapters.reverse();
    return novel;
};

export const parseChapter: Plugin.parseChapter = async (chapterUrl) => {
    const url = baseUrl + "/" + "novel" + "/" + chapterUrl;

    const body = await fetchApi(chapterUrl).then(res => res.text());

    const loadedCheerio = parseHTML(body);
    const chapterText =
    loadedCheerio('.text-left').html() ||
    loadedCheerio('.text-right').html() ||
    loadedCheerio('.entry-content').html();

    return chapterText;
};

export const searchNovels: Plugin.searchNovels = async (searchTerm) => {
    const novels: Novel.Item[] = [];
    const url = baseUrl + "?s=" + searchTerm + "&post_type=wp-manga";

    const body = await fetchApi(url).then(res => res.text());

    const loadedCheerio = parseHTML(body);


    loadedCheerio('.c-tabs-item__content').each(function () {
    const novelName = loadedCheerio(this).find('.post-title').text().trim();

    let image = loadedCheerio(this).find('img');
    const novelCover = image.attr('data-src') || image.attr('src');

    let novelUrl = loadedCheerio(this)
        .find('.post-title')
        .find('a')
        .attr('href') || '';
    const novel = {
        name: novelName,
        cover: novelCover,
        url: novelUrl,
    };

    novels.push(novel);
    });
    return novels;
};

export const fetchImage: Plugin.fetchImage = async (url) => {
    return await fetchFile(url);
};

export const filters = [{"key":"sort","label":"Order by","values":[{"label":"Rating","value":"rating"},{"label":"A-Z","value":"alphabet"},{"label":"Latest","value":"latest"},{"label":"Most Views","value":"views"},{"label":"New","value":"new-manga"},{"label":"Trending","value":"trending"}],"inputType":FilterInputs.Picker},{"key":"genres","label":"GENRES","values":[{"label":"Action","value":"action"},{"label":"Adventure","value":"adventure"},{"label":"Comedy","value":"comedy"},{"label":"Drama","value":"drama"},{"label":"Fantasy","value":"fantasy"},{"label":"Harem","value":"harem"},{"label":"Horror","value":"horror"},{"label":"Mature","value":"mature"},{"label":"Mecha","value":"mecha"},{"label":"Mystery","value":"mystery"},{"label":"Psychological","value":"psychological"},{"label":"Romance","value":"romance"},{"label":"School Life","value":"school-life"},{"label":"Sci-Fi","value":"sci-fi"},{"label":"Slice of Life","value":"slice-of-life"}],"inputType":FilterInputs.Picker}];