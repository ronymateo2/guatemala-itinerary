export interface Flight {
    number: string;
    airline: string;
    from: string;
    to: string;
    time: string;
    pnr?: string;
    tickets?: string[];
}

export interface Accommodation {
    name: string;
    location: string;
    checkIn: string;
    checkOut?: string;
    notes?: string;
    image?: string;
    phone?: string;
    confirmation?: string;
    pin?: string;
    address?: string;
}

export interface Activity {
    time?: string;
    title: string;
    description: string;
    type: 'flight' | 'activity' | 'accommodation' | 'transfer';
}

export interface DayPlan {
    date: string;
    title: string;
    activities: Activity[];
    accommodation?: Accommodation;
    flights?: Flight[];
}

export const itineraryData: DayPlan[] = [
    {
        date: "Sábado, 14 de febrero",
        title: "Llegada y Salida a Flores",
        flights: [
            {
                airline: "Avianca",
                number: "AV9305",
                from: "Medellín (MDE)",
                to: "Bogotá (BOG)",
                time: "08:30 – 09:30",
                pnr: "BM3AOR / BLDVJB",
                tickets: ["202 2488029354", "202 2488024570"]
            },
            {
                airline: "Avianca",
                number: "AV34",
                from: "Bogotá",
                to: "Ciudad de Guatemala (GUA)",
                time: "11:00 – 13:10",
                pnr: "BM3AOR / BLDVJB",
                tickets: ["202 2488029354", "202 2488024570"]
            },
            {
                airline: "TAG Airlines",
                number: "5U120",
                from: "Ciudad de Guatemala",
                to: "Flores, Petén (FRS)",
                time: "19:15 – 20:15",
                pnr: "0011BT"
            }
        ],
        accommodation: {
            name: "Casa Ramona, Flores",
            location: "Isla de Flores",
            checkIn: "15:00 a 00:00",
            phone: "+502 5891 7542",
            confirmation: "6365.568.911",
            pin: "5579",
            notes: "Se requiere un depósito por daños de GTQ 200 en efectivo."
        },
        activities: [
            { title: "Llegada y Check-in", description: "Llegada a Flores y check-in en Casa Ramona.", type: "accommodation" }
        ]
    },
    {
        date: "Domingo, 15 de febrero",
        title: "Exploración en Petén",
        activities: [
            { title: "Parque Nacional Tikal o Yaxhá", description: "Día completo para visitar las ruinas mayas.", type: "activity" },
            { title: "Paseo en lancha / Caminata", description: "Paseo por el lago Petén Itzá o caminata por las calles de Flores.", type: "activity" }
        ],
        accommodation: {
            name: "Casa Ramona, Flores",
            location: "Isla de Flores",
            checkIn: "Noche 2",
            phone: "+502 5891 7542"
        }
    },
    {
        date: "Lunes, 16 de febrero",
        title: "Regreso y traslado a Antigua",
        activities: [
            { title: "Tiempo libre en Flores", description: "Visita al Mirador de Canek o Isla de las Iguanas.", type: "activity" },
            { title: "Check-out", description: "Salida del hotel hasta las 11:00.", type: "transfer", time: "11:00" },
            { title: "Vuelo a Guatemala City", description: "Vuelo de regreso (50111) de Flores a Ciudad de Guatemala.", type: "flight", time: "20:45 – 21:45" },
            { title: "Traslado a Antigua", description: "Traslado terrestre (aprox. 1 hora) y check-in en Selah Hotel & Coffee.", type: "transfer" }
        ],
        flights: [
            {
                airline: "TAG Airlines",
                number: "50111",
                from: "Flores",
                to: "Ciudad de Guatemala",
                time: "20:45 – 21:45",
                pnr: "0011BT"
            }
        ],
        accommodation: {
            name: "Selah Hotel & Coffee",
            location: "Antigua Guatemala",
            checkIn: "Noche",
            phone: "+502 4621 1075",
            confirmation: "5257.211.332",
            pin: "5435"
        }
    },
    {
        date: "Martes, 17 de febrero",
        title: "Antigua Guatemala",
        activities: [
            { title: "Recorrido por Antigua", description: "Arco de Santa Catalina, Iglesia de la Merced y Cerro de la Cruz.", type: "activity" }
        ],
        accommodation: {
            name: "Selah Hotel & Coffee",
            location: "Antigua Guatemala",
            checkIn: "Noche 2",
            phone: "+502 4621 1075"
        }
    },
    {
        date: "Miércoles, 18 de febrero",
        title: "Rumbo al Lago Atitlán",
        activities: [
            { title: "Viaje a Panajachel", description: "Salida hacia Panajachel (aprox. 2.5 a 3 horas).", type: "transfer", time: "Mañana" },
            { title: "Check-in Suite", description: "Check-in en la Suite con vista al lago.", type: "accommodation", time: "15:00" },
            { title: "Calle Santander", description: "Caminata por la Calle Santander o atardecer frente al lago.", type: "activity", time: "Tarde" }
        ],
        accommodation: {
            name: "Suite con vista al lago",
            location: "Panajachel",
            checkIn: "15:00",
            phone: "+502 5442 8720",
            confirmation: "HMMXEWPMNQ",
            address: "Calle Del Frutal 2-94 Ramé"
        }
    },
    {
        date: "Jueves, 19 de febrero",
        title: "Lago de Atitlán",
        activities: [
            { title: "Tour en lancha", description: "Visita a pueblos como San Juan La Laguna o Santiago Atitlán.", type: "activity" }
        ],
        accommodation: {
            name: "Suite con vista al lago",
            location: "Panajachel",
            checkIn: "Noche 2",
            phone: "+502 5442 8720"
        }
    },
    {
        date: "Viernes, 20 de febrero",
        title: "Panajachel a Ciudad de Guatemala",
        activities: [
            { title: "Actividades finales", description: "Kayak o canopy en el lago.", type: "activity", time: "Mañana" },
            { title: "Check-out", description: "Check-out de la suite.", type: "transfer", time: "11:00" },
            { title: "Regreso a Ciudad de Guatemala", description: "Traslado de regreso a la Ciudad de Guatemala.", type: "transfer", time: "Tarde" }
        ]
    },
    {
        date: "Sábado, 21 de febrero",
        title: "Ciudad de Guatemala",
        activities: [
            { title: "Check-in Meraki", description: "Check-in en Meraki Boutique Hotel (Zona 10).", type: "accommodation", time: "15:00" },
            { title: "Ciudad Cayalá", description: "Visita a Ciudad Cayalá o cena en la Zona Viva.", type: "activity", time: "Tarde" }
        ],
        accommodation: {
            name: "Meraki Boutique Hotel",
            location: "Zona 10, Ciudad de Guatemala",
            checkIn: "15:00",
            phone: "+502 2331 4320",
            confirmation: "5898.480.004",
            pin: "4368"
        }
    },
    {
        date: "Domingo, 22 de febrero",
        title: "Fin del viaje",
        activities: [
            { title: "Cultura y compras", description: "Museo Nacional de Arqueología o Mercado Central.", type: "activity", time: "Mañana" },
            { title: "Check-out", description: "Check-out de Meraki Boutique Hotel.", type: "transfer", time: "12:00" },
            { title: "Traslado al Aeropuerto", description: "Traslado al Aeropuerto La Aurora (4 km).", type: "transfer" }
        ]
    }
];

export const contactSummary = [
    { service: "Vuelo Avianca", name: "Avianca", phone: "Ver App", ref: "BM3AOR / BLDVJB" },
    { service: "Vuelo TAG", name: "TAG Airlines", phone: "+502 2380 9401", ref: "0011BT" },
    { service: "Hotel Flores", name: "Casa Ramona", phone: "+502 5891 7542", ref: "PIN: 5579" },
    { service: "Hotel Antigua", name: "Selah Hotel", phone: "+502 4621 1075", ref: "PIN: 5435" },
    { service: "Airbnb Pana", name: "Abby", phone: "+502 5442 8720", ref: "HMMXEWPMNQ" },
    { service: "Hotel Guate", name: "Meraki Boutique", phone: "+502 2331 4320", ref: "PIN: 4368" },
];
