export const getCovidData = async (region) => {
    const endpoint = (region) =>  (
        `https://api.coronavirus.data.gov.uk/v1/data?filters=areaType%3Dregion%3BareaName%3D${region}&structure=%7B%22date%22%3A%22date%22%2C%22newCases%22%3A%22newCasesByPublishDate%22%7D&=`
    );
    const response = await fetch(endpoint(region));
    if(!response.ok) throw new Error('Error while fetching countrys');
    return response.json();
}