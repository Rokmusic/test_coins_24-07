interface FakeData {
    id: number;
    name: {
        title: string;
        titleIcons?: string[],
        shared: {
            count: number;
            icon: string
        };
        icon: string

    },
    chain: {
        icon: string;
        title: string
    };
    hour: {
        percent: number;
        pain: boolean
    },
    day: {
        percent: number;
        pain: boolean
    }
    market: number;
    volume: number;
    age: number;
    votes: {
        count: number;
        square: number
    }
}

interface FakeTokenData {
    id: number;
    name: {
        title: string;
        shared: {
            count: number;
            icon: string
        };
        icon: string

    },
    social: {
        title: string;
        icon: string;
    }[]

    hour: {
        percent: number;
        pain: boolean
    },
    day: {
        percent: number;
        pain: boolean
    },
    txn: number;
    market: number;
    lp: number;
    volume: number;
    age: number;
}