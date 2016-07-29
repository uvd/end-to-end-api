
declare module e2e {

    interface IEpisode {
        title: string;
        url: string;
        duration: {
            hours: number;
            minutes: number;
            seconds: number;
        }
        date: number;
        speakers: string[];
        description: string;
        id: number;
        play_count: number;
    }

}

