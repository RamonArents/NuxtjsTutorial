export default defineEventHandler(async (event) => {

    // //handle query params
    // const { name } = getQuery(event);

    // //handle post data
    // const { age } = await readBody(event);

    const { currencyKey } = useRuntimeConfig();

    //api call with private key
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`); //link met api key hier invullen

    return {
        message:data
    }
});