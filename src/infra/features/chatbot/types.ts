export type Store={
    status: {
        chatReturns: LoadingState;
        newsSentiment:LoadingState;
        apiKey:LoadingState;
    };
    apiKey:string
    chatReturns:chatReturns
    newsSentiment:newsSentiment
}


export type LoadingState = "REQUEST" | "SUCCESS" | "FAILURE";

export type roleContent = {
    role:string;
    content:string;
}

export type chatReturns = {
    message: string;
    apiKey:string;
    chatHistory: roleContent[];
}

export type newsSentiment = {
    sentiment: string,
    sentimentScore:string,
    direction:string,
    stocksTagList:string[],
    sentimentSummary:string
}

export type chatRequest= {
    message:string
    apiKey:string
}



