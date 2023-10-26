fetch("https://api.thecatapi.com/v1/breeds").then((o=>{if(!o.ok)throw new Error;return o.json()})).then((o=>console.log(o))).catch((o=>console.log(o)));
//# sourceMappingURL=index.d1fa23ff.js.map
