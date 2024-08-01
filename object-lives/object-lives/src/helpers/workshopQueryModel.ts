import type { SolrResultEntry } from '@arc/arc-foundation/lib/solr/models';
// import * as config from '../appsettings';
import { SearchResultFieldMapping } from '@/appsettings';
// import type { FileReference } from '@arc/arc-foundation/lib/forms/models/field';

type SolrFieldValueType = string | string[] | number | number[] | Date | Date[] | null;

function getSolrFieldValue(item: SolrResultEntry, solrFieldName: string): SolrFieldValueType {
    if (item?.data) {
        return item.data.find(entry => entry.key === solrFieldName)?.value as SolrFieldValueType;
    }
    return null;
}

export function getBannerText(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.BANNERTEXT) as string;
}

export function getTitleText(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.TITLETEXT) as string;
}

export function getDate(item: SolrResultEntry): Date {
    return new Date(getSolrFieldValue(item, SearchResultFieldMapping.DATE) as string);
}

export function getAbstractText(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.ABSTRACTTEXT) as string;
}

export function getAuthorName(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.AUTHORNAME) as string;
}

export function getAuthorURL(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.AUTHORURL) as string;
}

export function getAuthorName2(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.AUTHORNAME2) as string;
}

export function getAuthorURL2(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.AUTHORURL2) as string;
}

export function getTags(item: SolrResultEntry): string[] {
    const val = getSolrFieldValue(item, SearchResultFieldMapping.TAGS);
    return val ? val as unknown as string[] : [];
}

export function getProjectList(item: SolrResultEntry): SolrResultEntry[] {
    return getSolrFieldValue(item, SearchResultFieldMapping.PROJECT_LIST) as unknown as SolrResultEntry[];
}

export function getImageHover(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.IMAGEHOVER) as string;
}

export function getPostItem(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.POSTITEM) as string;
}

export function getProjectIndex(item: SolrResultEntry): number {
    return getSolrFieldValue(item, SearchResultFieldMapping.PROJECT_INDEX) as number;
}

export function getState(item: SolrResultEntry): string {
    return getSolrFieldValue(item, SearchResultFieldMapping.STATE) as string;
}
