export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    featured_image: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface BlogAPIParameters {
    limit: number;
    offset: number;
}

export interface BlogPostResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: BlogPost[];
}

export interface BlogPostResponseUI {
    count: number;
    resultsLength: number;
}

export interface BlogState {
    blogs: BlogPost[];
    totalCount: number;
    loading: boolean;
    error: string | null;
}
