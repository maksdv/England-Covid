export const getCovidData = async (nation) => {
    console.log(nation)
    const endpoint = (nation) =>  ('https://api.coronavirus.data.gov.uk/v1/data?' +
    `filters=areaType=nation;areaName=${nation}&` +
    'structure={"date":"date","newCases":"newCasesByPublishDate"}');
    const response = await fetch(endpoint(nation));
    if(!response.ok) throw new Error('Error while fetching countrys');
    return response.json();
}