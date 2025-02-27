export function calcularHP(baseStat, nivel = 50, iv = 31, ev = 252) {
    return  Math.floor(((2 * baseStat + iv + (ev / 4)) * nivel) / 100) + nivel + 10;
}
