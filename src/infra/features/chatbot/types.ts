export type Store={
    status: {
        chatReturns: LoadingState;
    };
    chatReturns:chatReturns
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




