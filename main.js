const fetchCat = async () => {
    const newCat = await fetch('https://api.thecatapi.com/v1/images/search')

    const data = await newCat.json()

    console.log(data);
    console.log(data[0].url);

    document.querySelector('.cat-img').src = data[0].url
}

fetchCat()