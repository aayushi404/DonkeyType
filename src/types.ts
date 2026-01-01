type result = {
  "time": number,
  "accuracy":number,
  "wrong_words": dataType[]
}

type dataType = {
    char : string, 
    status: string | null,
    id: number
}

export type {result, dataType}