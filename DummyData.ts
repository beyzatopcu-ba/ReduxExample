export const dummyData = [
    {
        id: 1,
        name: 'Bulldog',
    },
    {
        id: 2,
        name: 'Manx',
    },
    {
        id: 3,
        name: 'King rat snake',
    },
    {
        id: 4,
        name: 'Giant panda',
    },
    {
        id: 5,
        name: 'Barbary Lion',
    },
    {
        id: 6,
        name: 'Burrunan Dolphin',
    },
    {
        id: 7,
        name: 'Zaniskari',
    },
];


const request = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dummyData);
    }, 5000);
});

export const readAnimals = async (): Promise<typeof dummyData> => {
    const animalData = await request;
    console.log('okundu');
    return animalData as typeof dummyData;
}