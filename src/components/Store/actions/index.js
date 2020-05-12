import resolution from './resolution.js';

//Здесь импорт * as потому, что сам action news - export, а не export default
import * as news from './news.js';
import resolutionActionVersion from './resolutionActionVersion.js';


export {
    resolution,
    news,
    resolutionActionVersion
}