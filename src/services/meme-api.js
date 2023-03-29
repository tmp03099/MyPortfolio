import axios from "axios";

export const getMeme = async() =>{

    const options = {
    method: 'GET',
    url: 'https://ronreiter-meme-generator.p.rapidapi.com/meme',
    params: {
        top: 'Top Text',
        bottom: 'Bottom Text',
        meme: 'Condescending-Wonka',
        font_size: '50',
        font: 'Impact'
    },
    headers: {
        'X-RapidAPI-Key': '0e4cdea87dmsh3a861074a366492p1636cbjsn95b0e9957285',
        'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response);
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}
    
