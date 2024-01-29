export const microterritorios = [
    {
        label: 'Microterritorio 1',
        value: 'M1'
    },
    {
        label: 'Microterritorio 2',
        value: 'M2'
    },
    {
        label: 'Microterritorio 3',
        value: 'M3'
    },
    {
        label: 'Microterritorio 4',
        value: 'M4'
    },    
];
const subregion = [
    {
        "value": 1,
        "label": "RIO: PIVIJAY",
        municipios: [
            {
              "value": 161,
              "label": "CERRO SAN ANTONIO"
            },
            {
              "value": 205,
              "label": "CONCORDIA"
            },
            {
              "value": 258,
              "label": "EL PIÑON"
            },
            {
              "value": 541,
              "label": "PEDRAZA"
            },
            {
              "value": 551,
              "label": "PIVIJAY"
            },
            {
              "value": 675,
              "label": "SALAMINA"
            },
            {
              "value": 960,
              "label": "ZAPAYAN"
            }
        ]
    },
    {
        "value": 2,
        "label": "CENTRO: TENERIFE",
        municipios: [
            {
                "value": 58,
                "label": "ARIGUANI"
            },
            {
                "value": 170,
                "label": "CHIBOLO"
            },
            {
                "value": 460,
                "label": "NUEVA GRANADA"
            },
            {
                "value": 555,
                "label": "PLATO"
            },
            {
                "value": 798,
                "label": "TENERIFE"
            }
        ]
    },
    {
        "value": 3,
        "label": "NORTE 1: ARACATACA",
        municipios: [
            {
                "value": 53,
                "label": "ARACATACA"
            },
            {
                "value": 605,
                "label": "REMOLINO"
            },
            {
                "value": 745,
                "label": "SITIONUEVO"
            },
            {
                "value": 980,
                "label": "ZONA BANANERA"
            }
        ]
    },
    {
        "value": 4,
        "label": "NORTE 2: FUNDACIÓN",
        municipios: [
            {
                "value": 30,
                "label": "ALGARROBO"
            },
            {
                "value": 189,
                "label": "CIENAGA"
            },
            {
                "value": 268,
                "label": "EL RETEN"
            },
            {
                "value": 288,
                "label": "FUNDACION"
            },
            {
                "value": 570,
                "label": "PUEBLOVIEJO"
            },
            {
                "value": 660,
                "label": "SABANAS DE SAN ANGEL"
            }
        ]
    },
    {
        "value": 5,
        "label": "SUR: BANCO",
        municipios: [
            {
                "value": 245,
                "label": "EL BANCO"
            },
            {
                "value": 318,
                "label": "GUAMAL"
            },
            {
                "value": 545,
                "label": "PIJIÑO DEL CARMEN"
            },
            {
                "value": 692,
                "label": "SAN SEBASTIAN DE BUENAVISTA"
            },
            {
                "value": 703,
                "label": "SAN ZENON"
            },
            {
                "value": 707,
                "label": "SANTANA"
            },
            {
                "value": 720,
                "label": "SANTA BARBARA DE PINTO"
            }
        ]
    }
]
export const usuario = {
    tipoDoc: [
        {
            label: 'Cedula de ciudadanía',
            value: 'CC'
        },
        {
            label: 'Cedula de extrangeria',
            value: 'CE'
        }
    ],
    cargo: [
        {
            label: 'Auxiliar de enfermería',
            value: 'AF'
        },
        {
            label: 'Coordinador PIC',
            value: 'CP'
        },
        {
            label: 'Gerente',
            value: 'GT'
        }
    ],
    subregion: subregion,
    microterritorios: microterritorios,

    numeroTerritorio: [
        {
            label: 'Rural',
            value: 'rural'
        },
        {
            label: 'Urbano',
            value: 'urbano'
        }
    ],
    divisionGeografica: [
        {
            label: 'Centro Poblado',
            value: 'CP'
        },
        {
            label: 'Cabecera Municipal',
            value: 'C'
        }, 
    ],
    hospital: [
        {
            label: 'Hospital Nuestra Señora del Carmen',
            value: 'SC'
        },  
    ]
};

export const redPrestadora = {

}