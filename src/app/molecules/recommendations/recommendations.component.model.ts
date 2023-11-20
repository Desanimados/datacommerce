export interface Product {
    name: string,
    rank: AbcCurveRank,
    stock: Rank,
    stockRotation: Rank
}

export type AbcCurveRank = 'A' | 'B' | 'C';
export type Rank = 'Alto' | 'Baixo' | 'Médio';