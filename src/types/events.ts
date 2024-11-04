export type Event = {
    id: string;
    slug: string;

    render: () => Record<any, any>;

    data: {
        title: string;
        created_at: string;
        description: string;
        first_title: string;
    };
};