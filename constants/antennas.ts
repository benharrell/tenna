import QuarterWave from "../pages/antennas/quarter-wave";



export type AntennaDefinition = {
    type: AntennaType,
    frequency: number
};

export enum AntennaType {
    Dipole = 1,
    QuarterWave,
    FoldedDipole,
}

export type BandInfo = {
    alias: string,
    bottom: number,
    top: number,
    center: number
}
export const CommonBands = new Map<string, BandInfo>(
    [
        ["160 meters", {
            alias: "160m",
            bottom: 1.3,
            top: 1.5,
            center: 1.4
        }
        ],
        ["80 meters", {
            alias: "80m",
            bottom: 3.5,
            top: 3.9,
            center: 3.7
        }
        ]
    ]
);