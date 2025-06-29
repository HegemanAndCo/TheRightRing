const Prong4Desc = 'Prong settings are a popular choice. Four-prong settings are often used for a more minimalist look, allowing more of the gemstone to be visible, especially for larger stones. Round prongs are the most traditional, providing a smooth and classic appearance. What we like to do is create a martini like setting which is just like the shape of a martini glass and allows the ring to sit next to a wedding band.';
const europeanshankdesc = 'This squared-off bottom not only provides a distinctive and contemporary look but also helps prevent the ring from spinning or turning on the finger, ensuring that the central gemstone or design remains perfectly positioned.';
const knifeedgedesc = 'A knife edge band has a pointed, yet polished profile at the top.';
const twistdesc= 'A twist band starts in two different places as it weaves around itself, creating a twist pattern. It is common for one twist to flow over the other. ';
const otherstonedesc = 'We work with every sort of natural stone. If you have something special in mind, we can make it! Our available stones include, but are not limited to: Ruby, Amethyst, Pink Sapphire, Topaz, Garnet, Emerald, Green Sapphire, Blue Green Tourmaline, Tanzanite, Pink Tourmaline, Citrine, Garnet, Aquamarine, Peridot, Yellow Sapphire, and Zircon. If you would like a colored stone, please note which in the additional notes section at the end of the configurator.';


const questions = [
    { //Gem Type
        id: 1,
        title: 'Choose Your Gem Type',
        options: [
            { value: 1, label: 'Diamond', imageUrl: 'https://utfs.io/f/c50f5cd9-816d-4826-b886-e74228945868-1h0c.png', nextQuestion: 201, sidebarName: 'question1', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/54a672c3-e575-43b3-808b-bcedbb352a0f-j6kyyi.glb', description: 'Diamonds are renowned for their unparalleled brilliance, durability, and timeless beauty, making them an exceptional choice for rings and other jewelry.' },
            { value: 2, label: 'Blue Sapphire', imageUrl: 'https://utfs.io/f/c75ee547-32e4-43a1-a176-8bc8dcb6f345-7qq13o.png', nextQuestion: 202, sidebarName: 'question1', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c5ce3244-e48b-4276-bb32-bab19f054ee8-sb9cxa.glb', description: 'Blue sapphires are celebrated for their rich, mesmerizing color and exceptional durability, making them an excellent choice for rings and other fine jewelry.' },
            { value: 3, label: 'Other (Please Specify in Notes at End)', imageUrl: "https://utfs.io/f/5a34a2d7-52b7-4958-bec0-156d5a066123-swz6r3.png", nextQuestion: 201, sidebarName: 'question1', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b0c555d5-4223-4b84-be3e-f8253b6fc18a-eq3dfh.glb', description: otherstonedesc },
        ]
    }, //GemType
    { //Diamond Cut
        id: 201,
        title: 'Choose Your Shape of Diamond',
        options: [
            { value: 1, label: 'Round',imageUrl: 'https://utfs.io/f/b6941a61-2046-4c90-a37c-72fecfcd34df-1spwni.png', nextQuestion: 201301, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/54a672c3-e575-43b3-808b-bcedbb352a0f-j6kyyi.glb', description: 'Timeless elegance with its brilliant sparkle and classic circular shape.' },
            { value: 4, label: 'Princess', imageUrl: 'https://utfs.io/f/f68ddd07-eedc-48d9-96d8-03fe3bc91d16-japbx3.png', nextQuestion: 201304, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5719da2b-0337-466f-af4c-ef0c5168fc3c-10gwhq.glb', description: 'Showcases a sharp, square shape with brilliant facets, exuding a contemporary allure.' },
            { value: 2, label: 'Cushion', imageUrl:'https://utfs.io/f/8e836329-e45d-40eb-9796-cc07f22c4b99-inbq75.png', nextQuestion: 201302, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/820c7332-c22c-42ee-afcd-cf004a18a176-2kvsqe.glb', description: 'Square shape with rounded corners, resembling a pillow for a vintage charm.' },
            { value: 6, label: 'Emerald', imageUrl: 'https://utfs.io/f/37ba41ca-af13-4e1f-b531-43b1e446f7d1-mdb6i3.png', nextQuestion: 201306, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c4af385e-552c-43cc-a681-833ef7dcd02d-qb6dqf.glb', description: 'Rectangular shape and step-cut facets, emphasizing clarity and elegance.' },
            { value: 7, label: 'Oval', imageUrl: 'https://utfs.io/f/a6ddd2f2-fde6-4673-a0d3-b0a721b91e27-7u20g3.png', nextQuestion: 201307, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/36e20b69-b871-491a-87ca-4c80bf6f96ca-v6dunb.glb', description: 'Offers a graceful, elongated shape with brilliant facets for maximum sparkle.' },
            { value: 9, label: 'Marquise', imageUrl: 'https://utfs.io/f/0f6435c7-08b0-4146-8ddf-f2943764db8d-5grwly.png', nextQuestion: 201309, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/9a3289a7-44b6-4571-bd5a-b04aa2c688fa-77g9ma.glb', description: 'Elongated shape and pointed ends, maximizes carat weight and finger coverage.' },
            { value: 3, label: 'Radiant', imageUrl: 'https://utfs.io/f/9c8372ca-73cb-4a8e-a044-9cd90c017497-ts76qk.png', nextQuestion: 201303, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/9912834c-bdb8-4c93-bd41-5d4bee6026b3-zyrtz.glb', description: 'Rectangular shape with trimmed corners, merging brilliance and modern style.' },
            { value: 8, label: 'Pear', imageUrl: 'https://utfs.io/f/ecb4952c-dba4-459c-987c-7a3e4f12a4c5-bkl7b.png', nextQuestion: 201308, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bf33b97f-0a69-47d9-a7df-d9644c7e55ea-40li4b.glb', description: 'Combines the best of round and marquise shapes, creating a teardrop design that\'s unique and elegant.' },
           // { value: 5, label: 'Baguette', imageUrl:'https://utfs.io/f/9f0c5cdf-bced-4479-9274-b86773437a62-e6hj5q.png', nextQuestion: 201305, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b15c31e8-de64-4854-9d22-5fe1d53de19a-70kpcy.glb', description: 'Elongated rectangular shape and step-cut facets, provides a sleek, sophisticated look.' },
           // { value: 10, label: 'Straight Trillion', imageUrl:'https://utfs.io/f/8cbf8305-e9c5-49cc-8456-6ee096858b4c-oxqqwt.png', nextQuestion: 201310, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a08817f5-1e2c-4e5c-862a-724efe5b344e-vabd4e.glb', description: 'A triangular shape with brilliant facets, perfect for a modern, bold statement.' },
           // { value: 11, label: 'Curved Trillion', imageUrl: 'https://utfs.io/f/d30cb1f2-713e-44c6-8dc2-b4ca1b399034-43f0nm.png', nextQuestion: 201311, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c6ee440c-0efd-4031-af2b-89e53aa28635-aymuhv.glb', description: 'Adds a subtle twist to the traditional triangular shape, enhancing its modern and unique appeal.' },
        ]
    },
    { //Sapphire Cut
        id: 202,
        title: 'Choose Your Shape of Blue Sapphire',
        options: [
            { value: 1, label: 'Round',imageUrl: 'https://utfs.io/f/6e450280-97fe-42ac-8886-14c56b68f160-fl0gxa.png', nextQuestion: 202301, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c5ce3244-e48b-4276-bb32-bab19f054ee8-sb9cxa.glb', description: 'Timeless elegance with its brilliant sparkle and classic circular shape.' },
            { value: 4, label: 'Princess',imageUrl: 'https://utfs.io/f/e34ef0cf-d627-47bd-addd-edc6d4304237-nep9rr.png', nextQuestion: 202304, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/cb1b34c4-f726-496c-bee9-e755955dd54b-ual7ce.glb', description: 'Showcases a sharp, square shape with brilliant facets, exuding a contemporary allure.' },
            { value: 2, label: 'Cushion', imageUrl:'https://utfs.io/f/11406c07-3da5-4984-9a94-b82711e2b84a-vkznq1.png', nextQuestion: 202302, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/51bb7edf-2ce7-46a9-8225-e3d6ec1ab2e8-5vs33q.glb', description: 'Square shape with rounded corners, resembling a pillow for a vintage charm.' },
            { value: 6, label: 'Emerald',imageUrl: 'https://utfs.io/f/c4dc6c56-1c40-41d4-aede-ff7b86f84465-2h3r6y.png', nextQuestion: 202306, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a4c25faa-58c1-4012-b68b-243ff2823b80-x3djxv.glb', description: 'Rectangular shape and step-cut facets, emphasizing clarity and elegance.' },
            { value: 7, label: 'Oval',imageUrl: 'https://utfs.io/f/3581690a-c320-4c98-a713-0bae26e925e6-o1zx4s.png', nextQuestion: 202307, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/dda63b38-349f-4c9e-a1a2-42bc09f349af-gcuc3f.glb', description: 'Offers a graceful, elongated shape with brilliant facets for maximum sparkle.' },
            { value: 9, label: 'Marquise',imageUrl: 'https://utfs.io/f/12387e94-773b-4bb9-986e-4301eb65eeee-m7j7sb.png', nextQuestion: 202309, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/52a511d2-6fda-4074-8c4d-2255fb692bc5-8eqkym.glb', description: 'Elongated shape and pointed ends, maximizes carat weight and finger coverage.' },
            { value: 3, label: 'Radiant',imageUrl: 'https://utfs.io/f/a4503a3a-2c3c-4017-91d8-97b657e4d4c4-t80aed.png', nextQuestion: 202303, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/8473f8ef-a1e3-43a6-a0e3-a68f27fd22bc-g9g3cv.glb', description: 'Rectangular shape with trimmed corners, merging brilliance and modern style.' },
           // { value: 5, label: 'Baguette',imageUrl: 'https://utfs.io/f/edf67e18-5cdf-4ebe-a0bc-115d997b10b6-ji3p43.png',  nextQuestion: 202305, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c50d0739-240d-42af-90b8-ec8ff55fd362-u2tu2e.glb', description: 'Elongated rectangular shape and step-cut facets, provides a sleek, sophisticated look.' },
            { value: 8, label: 'Pear',imageUrl: 'https://utfs.io/f/9d3a2fb4-361a-4c92-ab62-4934e637801f-cotvrs.png', nextQuestion: 202308, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/17974f8c-b32d-4bcb-875c-d3ba146aeb7c-hxfwz5.glb', description: 'Combines the best of round and marquise shapes, creating a teardrop design that\'s unique and elegant.' },
           // { value: 10, label: 'Straight Trillion',imageUrl: 'https://utfs.io/f/7a9f12ac-3ba6-4169-9121-2cab4b2dd74b-rsc0bz.png',  nextQuestion: 202310, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c7a38c90-ca0d-40c4-8ff4-f40d7767e01f-2txsey.glb', description: 'A triangular shape with brilliant facets, perfect for a modern, bold statement.' },
           // { value: 11, label: 'Curved Trillion',imageUrl: 'https://utfs.io/f/6fbff682-c2f4-4477-98b0-441911b02411-g40mu4.png', nextQuestion: 202311, sidebarName: 'question2', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a4deddd5-7a65-4350-ae6c-8d6a93ab268f-5diqk1.glb', description: 'Adds a subtle twist to the traditional triangular shape, enhancing its modern and unique appeal.' },
        ]
    },

    {
        id: 3000,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 401, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 402, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 403, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },

    {
        id: 3,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 401, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 402, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 403, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },

    { //Diamond, Round, Metal
        id: 201301,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 401, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 402, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 403, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Cushion, Metal
        id: 201302,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 404, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 405, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 406, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Radiant, Metal
        id: 201303,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 407, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 408, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 409, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Princess, Metal
        id: 201304,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 410, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 411, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 412, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Baguette, Metal
        id: 201305,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 413, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 414, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 415, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Emerald, Metal
        id: 201306,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 416, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 417, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 418, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Oval, Metal
        id: 201307,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 419, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 420, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 421, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Pear, Metal
        id: 201308,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 422, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 423, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 424, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Marquise, Metal
        id: 201309,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 425, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 426, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 427, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Trillion, Metal
        id: 201310,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 428, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 429, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 430, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Curved Trillion, Metal
        id: 201311,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/b97a8059-de56-468c-bebb-c93a5834a07b-aj9wmk.png', nextQuestion: 431, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b7f79fca-8dbe-4313-bcca-3caf5a4ba862-vt8jik.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/ba809f47-5e35-425b-9ea1-bd95a9d36d3c-aja0d0.png', nextQuestion: 432, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/acfdcc77-da1d-46af-9c20-e28372a2fb1e-rqz9oi.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/025b6f29-3eec-4b7e-9b6a-57508e2f4865-aj9yuv.png', nextQuestion: 433, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b494dbee-da77-4c15-8851-75763a97b28a-v2amfv.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },

    { //Blue Sapphire, Round, Metal
        id: 202301,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 434, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 435, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 436, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Cushion, Metal
        id: 202302,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 437, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 438, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 439, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Radiant, Metal
        id: 202303,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 440, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 441, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 442, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Princess, Metal
        id: 202304,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 443, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 444, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 445, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Baguette, Metal
        id: 202305,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 446, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 447, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 448, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Emerald, Metal
        id: 202306,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 449, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 450, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 451, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Oval, Metal
        id: 202307,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 452, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 453, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 454, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Pear, Metal
        id: 202308,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 455, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 456, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 457, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Marquise, Metal
        id: 202309,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 458, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 459, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 460, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Trillion, Metal
        id: 202310,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 461, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 462, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 463, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Curved Trillion, Metal
        id: 202311,
        title: 'Select Metal Type',
        options: [
            { value: 1, label: 'Platinum', imageUrl: 'https://utfs.io/f/1a5c9537-3ae1-4581-b902-8990bbeb8265-bhw3sq.png', nextQuestion: 464, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed36a010-4d92-4952-9be8-83c3171d0fd8-3cu1zm.glb', description: 'Platinum is highly esteemed in the world of jewelry for its exceptional properties and luxurious appeal. Known for its remarkable durability, platinum is one of the strongest and most enduring metals, making it an excellent choice for rings and other pieces of jewelry that are worn daily.' },
            { value: 2, label: 'Yellow Gold', imageUrl: 'https://utfs.io/f/1d4bbb91-5613-4fcb-a248-168b2c21942d-4bxqc0.png', nextQuestion: 465, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/08e48db9-1783-4f38-8c95-86d51bd6fa1c-jcnf08.glb', description: 'Yellow gold has long been cherished for its timeless elegance and warm, radiant glow, making it a classic choice for rings and fine jewelry. Its rich, golden hue exudes a sense of luxury and tradition, often associated with heritage and enduring love.' },
            { value: 3, label: 'Rose Gold', imageUrl: 'https://utfs.io/f/0ca5ad10-415f-415f-be5e-6ece42c06cc1-on15bp.png', nextQuestion: 466, sidebarName: 'question3', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e03b4161-d0d5-4870-8ac1-69f1fda37e7b-r7mr41.glb', description: 'Rose gold, with its romantic blush hue, offers a distinctive and modern twist to traditional jewelry, making it an increasingly popular choice for rings and other fine pieces.' }
            // Add more options as needed
        ]
    },
    { //Diamond, Round, PT, Head
        id: 401,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/0227cc13-c9fd-4b2b-a1e0-ffa738f62907-jqm6ac.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/26309f53-1405-4596-a2d9-732f42039b93-lyejrq.glb', description: '' },
            { value: 3, label: 'Half Moon Bezel', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/4011c522-03c2-40e9-83f1-385eb2180128-8p2buw.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d0e2af63-92a1-4273-b9c5-8d503ae1e6b6-cgqzvc.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Round, YG, Head
        id: 402,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/06f1cc3d-f8c4-4d90-9fed-53ea0aa33fab-6c6lva.glb', description: Prong4Desc  },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/7280cb81-8d3b-4757-bf18-654c39330be0-44e8dw.glb', description: ''  },
            { value: 3, label: 'Half Moon Bezel', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1c0f8673-3cee-4f49-83fc-7e52503bf2f0-hdqgaq.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e90950d4-7f05-4b21-adeb-5c37c9d10e71-dm1saa.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Round, RG, Head
        id: 403,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/75fb0c23-bd2d-45bd-acb2-b772ad622045-5l7t9f.glb', description: Prong4Desc  },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/df845e02-b6c5-4cc2-b40d-8959f41cabef-7t06qt.glb', description: ''  },
            { value: 3, label: 'Half Moon Bezel', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b5280a7c-7389-46fb-9116-83e2b728f14f-5gc161.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fa522ae0-c8ed-4e99-9e37-b7cc1e1eac32-1ond5l.glb', description: ''  }
            // Add more options as needed
        ]
    },
     { //Diamond, Cushion, PT, Head
        id: 404,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/24127ae9-d4f0-462b-9b4d-8a1dd14fe001-74iakh.glb', description: Prong4Desc  },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/23813060-0699-4c54-931d-9d09bd64225f-63kkhv.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bf806134-caea-4c05-9c23-7d3a87854b66-m7qm9n.glb', description: ''  },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/7e4a15a8-9d83-41bd-9c3b-f765ba6fe084-logte3.glb', description: ''  },
         //   { value: 5, label: 'Tension Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/cdb66b95-3dad-4d2a-adad-8af501acf8b5-ddrift.glb', description: ''  }            // Add more options as needed
        ]
    },
    { //Diamond, Cushion, YG, Head
        id: 405,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1cc04c94-732c-4227-b2d9-e0c58e42cb45-kay22f.glb', description: Prong4Desc  },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/4dda1c8c-41d7-4690-8d4c-012b47df2379-ja0bzt.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/807ce659-d478-492a-8508-32eeb809a328-91aurp.glb', description: ''  },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f02a872e-ed74-4983-a6bc-75d357d8efe8-8i11w5.glb', description: ''  },
         //   { value: 5, label: 'Tension Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b40721ed-c185-4394-8024-811ad48823cb-qk79xr.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Cushion, RG, Head
        id: 406,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1f4b8ab8-a0f6-4203-b9df-d780681e831f-o3cxm8.glb', description: Prong4Desc  },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/eae638ba-bf88-4fcd-b7fb-ecf82a628d7b-p4anou.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b624fb25-dae3-4cab-a4ff-a32e672f024e-hli7is.glb', description: ''  },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/742db534-7385-412b-ac8e-52be9b60040c-i4s0ec.glb', description: ''  },
           // { value: 5, label: 'Tension Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a9427a7d-8d81-4d1a-b34e-9e9cb14d31c6-hu3pqw.glb', description: ''  }            // Add more options as needed
        ]
    },
     { //Diamond, Radiant, PT, Head
        id: 407,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/271be72f-d44e-4094-bc77-ca64a9cb81af-vd35zl.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c8d01ef4-cb07-47f3-8b88-7272c3f48a82-xeym4t.glb', description: ''  },
           // { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' }
            // Add more options as needed
        ]
    },
    { //Diamond, Radiant, YG, Head
        id: 408,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e9defc83-e0f4-491a-9557-4a70a00fed25-i6nehn.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a9eff6ee-dbac-4257-a056-6df6bbefdfe0-k8iumv.glb', description: ''  },
            //{ value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' }
            // Add more options as needed
        ]
    },
    { //Diamond, Radiant, RG, Head
        id: 409,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/80ab8c51-9dd9-4275-ab11-c931c57766c5-8g5nsu.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1c6a1569-bd7c-4e27-96ff-b5acb4ada13d-6ea7nm.glb', description: ''  },
           // { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' }
            // Add more options as needed
        ]
    },
     { //Diamond, Princess, PT, Head
        id: 410,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 4 Prongs', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/395de573-d3df-4043-930b-e51f0ebcc9de-9oysc6.glb', description: ''  },
            { value: 2, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5e20e43f-0a43-4095-8444-398f0a793ef2-l5q3t9.glb', description: Prong4Desc  },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fc790d0f-94e6-43aa-a291-4c7abc88e35a-wvai2.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a68c3d15-41a4-45c0-ade8-d0c16f45d0cf-z0ijk9.glb', description: ''  },
            { value: 5, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/abf7257e-3288-4746-a106-e50a34abb90d-14i31o.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Princess, YG, Head
        id: 411,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 4 Prongs', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/812df82e-b973-42b5-8783-544b79720db0-rc2fqk.glb', description: ''  },
            { value: 2, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b1ef0114-720a-4f00-b7f5-d48e7d95c587-3imgev.glb', description: Prong4Desc  },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6d67474e-3a8a-49f3-baed-13b4a1715d25-ijyxwg.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c86327a5-bfa6-4344-8567-d3402986b7be-hdew5v.glb', description: ''  },
            { value: 5, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/2786d31d-cca4-4853-bb1b-1a3e85f9b696-eaxujm.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Princess, RG, Head
        id: 412,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 4 Prongs', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b2639adb-87e1-4298-8245-4e6d68fbac47-gypxjv.glb', description: ''  },
            { value: 2, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1c003475-f47a-422c-807f-20392fc9f85f-n7p89u.glb', description: Prong4Desc  },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/977d1682-d58f-41ad-82b0-73db13d5e9ba-pqtfdz.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bf07356e-31d2-4886-8c97-323a8323ff92-9cwsiu.glb', description: ''  },
            { value: 5, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/de51352a-a9de-4d8d-8c26-c77d4351c5d3-u3d551.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Baguette, PT, Head
        id: 413,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b1c293b9-9c75-4300-bb26-81fb9af33687-f5may1.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b2ea698f-3f9b-4550-9ff1-eaf0426beaf1-mkngf9.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/eb03b485-c164-49bf-8748-93be87ee2809-t0eqp1.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Baguette, YG, Head
        id: 414,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ee91b5e0-84dc-4dd4-a721-c3551014081e-2hhcgd.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/7756afcf-3eaf-4dce-852c-7d52b12dfc13-4xjt0v.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bac7313e-57db-4d0e-9f6b-2b8bfdd5a9ee-bdb3an.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Baguette, RG, Head
        id: 415,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/021fbb48-1ec3-4464-be3b-96c70fa3d7a9-t7t152.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/9f571e53-ee20-441f-ba24-d6ebc1a0ba8f-lsrvnu.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/07a611f7-55a3-4608-9b33-e35e38a4320f-fd0le2.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Emerald, PT, Head
        id: 416,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/7c3b7323-ac5f-4647-9e4f-09ba7aed0051-kyy3fq.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/98af8638-ccaf-4909-b0bb-d12029d1d4a7-mv4l0i.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6e5acda0-84c0-4db2-82f4-42404ef87743-z9qngq.glb', description: ''  },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/224b6f60-6cd6-44d1-ac67-96383708a11f-lrd5e0.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Emerald, YG, Head
        id: 417,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/463cf2db-b375-4e50-b698-d0f85b16b181-giu8bg.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/7d370c69-8765-4ff9-b914-13519183109b-if0pw8.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/86e8a0af-c789-491b-bf77-6b7e5d967ad8-wu3650.glb', description: ''  },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bbcafca6-82a8-474f-a4d9-19affba13dfa-9myqpq.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Emerald, RG, Head
        id: 418,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/61fe0763-843a-43a6-b3f0-636c2fb62f1a-coa7x1.glb', description: Prong4Desc  },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/61fe0763-843a-43a6-b3f0-636c2fb62f1a-coa7x1.glb', description: ''  },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/3349b9b7-6283-4f4e-b3f4-c41ad4c9a4b4-qv21c5.glb', description: ''  },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/74fcc3c0-8752-4453-9ab6-85c6e0ded473-4kmwl3.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Oval, PT, Head
        id: 419,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/dd33dc60-d8f6-4729-a8bc-89addc527cc8-a49r8c.glb', description: Prong4Desc  },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/50a18195-0f5f-497c-9866-3f68a4a42ed4-jqn1wi.glb', description: ''  },
            { value: 3, label: 'Half Moon', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/36df6283-a8c4-447f-8f30-5f5b161d04c9-39tve8.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d5355978-ef58-47cc-ac4f-42f5763bf9e8-lt5ly8.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Oval, YG, Head
        id: 420,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/4fe34a4c-21f6-4e77-824d-0384b9ffebff-bybiy6.glb', description: Prong4Desc  },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5b177109-aa07-41e9-863b-7f6f290bce48-t7vpw4.glb', description: ''  },
            { value: 3, label: 'Half Moon', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/10bc183e-bd83-4c49-a3af-2ac0849474ee-pcf5kq.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/9b755225-1c1e-4bfc-95b7-e42afa365f22-9fo8a.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Oval, RG, Head
        id: 421,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/62eb5446-9bfb-458b-b94b-1b3f304c9612-qm4617.glb', description: Prong4Desc  },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/be3d8bfd-da46-48ae-a4b0-edbf276e1f2c-38sn3n.glb', description: ''  },
            { value: 3, label: 'Half Moon', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/06168a5b-4317-4895-9a78-19450f7401ff-d80jen.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/49bdbea3-6a69-4c43-b3e9-8d71accb965b-wq4181.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Pear, PT, Head
        id: 422,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/14661caa-27bd-49c1-90e8-5a72d35fc965-xehu9b.glb', description: ''  },
            { value: 2, label: '5 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c3720553-defe-47e9-b07a-d2c0e71eb9b1-3jl14h.glb', description: ''  },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/cd062aed-695e-49b8-a623-fb7ca7ac3cc0-ufm7x8.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b57dd0c4-44c5-4dcf-a4b6-e6b9709707e4-5cmqks.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Pear, YG, Head
        id: 423,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a5ed61bb-1342-439c-a6bd-d5fb39010945-bbwk2t.glb', description: ''  },
            { value: 2, label: '5 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/0456b80f-b1a8-4748-af7b-cc333cf47e1b-ij0921.glb', description: ''  },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/56333c41-077b-4222-bf93-908c17df26aa-iiwjve.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/eb200cbe-f8c5-4e12-b1c7-ac17447fb8bc-rf80ra.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Pear, RG, Head
        id: 424,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bf312658-bd99-48b3-a0a5-273adcb915c8-l4rswy.glb', description: ''  },
            { value: 2, label: '5 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6b5c93a4-f88d-4609-b938-f521eb55595e-k1ffxc.glb', description: ''  },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/eff1c2e0-01e4-45e0-9a34-b8fff64c0b2a-dxrt4d.glb', description: ''  },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5d16505f-486d-4302-bccc-8c8b812ee7c4-b57o83.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Diamond, Marquise, PT, Head
        id: 425,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 2 Prongs', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/720437ef-66b8-49db-b3ef-16730848b833-4k5q9d.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/0354c889-dc0b-480e-8cb7-d86526bb54b9-klollm.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a2ae6864-790e-48de-abaa-f08a591becf7-644bvu.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/2169bcc3-154a-402b-a231-4580fe37ded7-awlyd0.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Marquise, YG, Head
        id: 426,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 2 Prongs', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/06be80bf-8b9b-4cb3-8ba8-cbb6fcca875f-4k5q1z.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/898b2397-e445-4ef3-bbfe-9cc2fb650e82-klolt0.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d03c448e-b969-43dd-9fa6-353ef7bed745-644bog.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e582144d-011a-42e2-ba1d-949c72712923-awly5m.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Marquise, RG, Head
        id: 427,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 2 Prongs', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a0df4654-60a4-4747-850d-98d986b75c26-4k5q80.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/3d7c39c0-be2f-4f8f-a94f-6406e80c555e-klolmz.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/4b6e8df5-f5db-4105-af1a-ca108d89f2dc-644buh.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/82e47046-3981-416e-98d5-a360438c7f13-awlybn.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Trillion, PT, Head
        id: 428,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b759dec8-3599-4898-add2-cd604c2e1c89-2x6z9e.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a7706e21-3071-4503-b959-3fc146f492fc-snk17j.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/4d7cf804-e504-43fb-bed7-0b208636f8a2-u2wgpp.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Trillion, YG, Head
        id: 429,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/8d884bb3-b287-4d43-a800-87e9995c72ac-sn7a7o.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/beed8fc5-9fe4-41e7-8925-ee76bda5b98f-2wu89j.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/41d1ae60-14ef-4f05-b0fc-4b47fdfb7934-1hhsrd.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Trillion, RG, Head
        id: 430,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ca3f4aef-d101-4c06-b95b-08dce40e9152-ufxmb.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/be60175f-c5da-4dee-8137-e0790cc2b446-qkszkg.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/57fa7df9-1e3b-4646-ba97-dd3e533a403f-s05f2m.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Curved Trillion, PT, Head
        id: 431,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/494c8cea-6ab8-4752-bfd1-48617b1d6a4f-rlv2ux.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/8278a8af-68b0-4ab2-8b92-be2ddb7ed40f-n9sh7o.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/63168d29-37c3-4c9f-8a5f-49ed8ccb4ed2-xp12ci.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Curved Trillion, YG, Head
        id: 432,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/38b65e9a-c1ed-4896-b729-a7c0e8930d4c-2l06jz.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e0fc011b-b076-447e-9f63-90ed21cabd15-mqgogi.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/24e02ae9-e44f-4824-af48-148ae0af7a51-cb83bo.glb' }
            // Add more options as needed
        ]
    },
    { //Diamond, Curved Trillion, RG, Head
        id: 433,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/4669cc6d-d549-4ac5-af6a-d22370ceda84-66a7t4.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/09bc9ab6-289a-486c-92f0-d0af7244cf98-qbqppn.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d0b338e8-0490-4d24-97cc-c2185de636e2-fwi4kt.glb' }
            // Add more options as needed
        ]
    },






    { //Blue Sapphire, Round, PT, Head
        id: 434,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/8cbee040-e70d-4490-bb5c-c10a747c43ff-720a0w.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d92007d9-fe3d-4d6c-a086-0af727bb9ef8-6oj6v6.glb' },
            { value: 3, label: 'Half Moon Bezel', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/56b88e68-3aef-4d65-b172-52abc8f0be45-wnuho4.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/9c22ad85-a12f-4abe-8577-9dcb00d426ee-8zazr8.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Round, YG, Head
        id: 435,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1c3c03f8-24f0-469e-a3e0-509bef069408-oxd4m.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ded76297-51a2-4a6a-8ec4-54087954d4db-bg9yw.glb' },
            { value: 3, label: 'Half Moon Bezel', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/96919c06-605e-44e0-b02f-16d0d30c9672-qarkru.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c08cd979-4eee-44e0-9285-4945ce54d79f-2m82uy.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Round, RG, Head
        id: 436,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b5d191d5-d9f5-4d9b-98f6-9f2d573eef9b-m5kt0x.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/84124d8f-1375-400b-9d73-4fdc56c343b3-mj1w6n.glb' },
            { value: 3, label: 'Half Moon Bezel', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ea0dc0c4-e210-4fac-99fc-c0fc6aa4b6d4-3g9emb.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c7f15bc0-e319-4a6a-9c0f-8f5adaaabdc5-k8a3al.glb' }
            // Add more options as needed
        ]
    },
     { //Blue Sapphire, Cushion, PT, Head
        id: 437,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d88923bd-8fd3-4eaf-a35d-6401629098e2-vdgj83.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bf3c8e0f-065e-4419-94a7-b04268bdd8b8-z42gvj.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6a9dd4f2-b5c9-4acc-94f7-9442f3a5cc79-sbd2mn.glb' },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ec7460d4-a899-4ce6-9955-c13a89546807-2xfrz.glb' },
        //    { value: 5, label: 'Tension Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/909b219b-5972-41dd-9655-c13633750b62-20dqrp.glb' }            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Cushion, YG, Head
        id: 438,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1b7e88de-546b-47eb-b524-1c119a19fbba-x4k2zn.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/165d8928-4486-4d5e-bb9a-e5b3cba26f65-skz145.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/29e30e9b-60fa-4277-a70d-27eb23cd2b3b-yugie1.glb' },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a71da9e0-2e7c-41f8-995a-03429b1f5059-6m0vjd.glb' },
           // { value: 5, label: 'Tension Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f97502c5-61b1-49fa-90b0-1136dd5ab34c-4ipozp.glb' }            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Cushion, RG, Head
        id: 439,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/8d7b3eb2-b6ef-4063-8836-e9f1bf842488-pdarss.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f5a41d92-e985-442c-a8ac-c6b4ef9008a4-ktppxa.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/62bde0ca-43a9-4962-92d1-e7505cc491bd-sfe8e8.glb' },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/17680a46-82ca-4486-92e3-0acf01fffffc-eda6q8.glb' },
         //   { value: 5, label: 'Tension Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/994c6402-8594-47fd-96e7-52972bccfb52-c9z06k.glb' }            // Add more options as needed
        ]
    },
     { //Blue Sapphire, Radiant, PT, Head
        id: 440,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fbb14362-7d09-4d93-95dc-b79c201d225a-z64xzv.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5a573742-f053-4348-b263-8cc168ed7923-q2yu8v.glb' },
            //{ value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Radiant, YG, Head
        id: 441,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/89cabbce-f351-4a7e-b080-8a19a3d1892d-sn1i8h.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/447b92c9-2b52-42fc-a0bc-2015ad12f596-jjvehh.glb' },
            //{ value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Radiant, RG, Head
        id: 442,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/91fa95ab-20e9-4f55-b5cf-af6543c094b9-kvs71m.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e98bd2ee-b30b-4ba0-becc-0d252cc89ec0-bsm3am.glb' },
           // { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' }
            // Add more options as needed
        ]
    },
     { //Blue Sapphire, Princess, PT, Head
        id: 443,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 4 Prongs', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/18824380-ca9c-4ce8-80ed-7d5fd7591c91-vpd1qi.glb' },
            { value: 2, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/074db0b5-5892-4fc4-b2a5-e99cfb42e1c8-pqnyx3.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/597d5bc3-645c-4d5c-ac26-65633b8d1df7-pf445e.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5a0bb488-fd69-4cfa-91d7-6141e0bef6be-1ysqff.glb' },
            { value: 5, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/7d75b46f-acd9-45e7-b248-b109711d889b-xxhi60.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Princess, YG, Head
        id: 444,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 4 Prongs', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/58ca64b9-e270-4909-b5fb-ddb50d84db6e-l1zge8.glb' },
            { value: 2, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6dd862ba-d594-40ac-a62f-974b7d3e9c1d-f3adkt.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ccf91fa8-6a4e-468b-baf5-5b0e709053a8-yymchg.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f5343824-fe5e-49e7-ab5d-333d66348283-8okuwv.glb' },
            { value: 5, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/49168640-9aa9-44e3-85a9-09e4f080d0a1-nx6sb6.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Princess, RG, Head
        id: 445,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 4 Prongs', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/3e6a54e4-8c15-4fd7-9b18-7272909136cf-mlg4lj.glb' },
            { value: 2, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ac4e6aa5-36e2-426b-a66f-4b8d928e44ae-sk57ey.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a3392d56-aa07-4dde-9ce7-f3465c91dcd5-8ot8ib.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/9aba10cf-2b8a-4f6d-ada3-bab23ab392bb-ip3m2i.glb' },
            { value: 5, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fdc275dc-5cb8-47d5-beee-6a5b024fb992-2pm9zb.glb', description: ''  }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Baguette, PT, Head
        id: 446,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f9c6eeeb-bbf9-47ec-901d-d2bfb75a088b-f2yycr.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c24b381e-a3f6-4043-843a-29e944fbeaa3-corypb.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/896facad-b109-4607-9c80-8029267c8f81-8owa4x.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Baguette, YG, Head
        id: 447,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/dda1c625-b96b-4dd6-8e69-a1438fa052d9-4fld0h.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a2e03c2f-dc10-4010-b82c-ac36626eadb2-21edd1.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e45d198d-89a2-4d91-b47e-268f2690d172-jc9vh7.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Baguette, RG, Head
        id: 448,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/075daed8-4ae4-40e1-b0e1-8699a9b66cdb-vt9tzu.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ba8e94da-082a-4aa9-8f18-01e2edbaee53-tf2uce.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5317fdcc-69f5-4509-94d8-ddb47d2f75c3-81eli6.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Emerald, PT, Head
        id: 449,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bee60f8a-2a7c-4464-8d31-13d2c8d572f4-5aif66.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a14941e9-cd2a-4f88-9bd5-d6f211f79661-3ebxle.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/49b6a8d4-9888-402a-9e09-d01464cecf5e-w4r5dq.glb' },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/b1598ea5-e677-42d5-b0e2-8c4aa94947e6-rk3os.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Emerald, YG, Head
        id: 450,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/81a9ee04-6def-4bd1-9506-0badd8b0b29c-9qmaag.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/2367506e-07de-4aa1-9bd5-a7fe367ff006-7ufspo.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/2569cbe1-9366-487d-93a2-ce5f596e6f67-tp3o20.glb' },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/dac118ae-1317-434a-91b1-2a5b322f3bb9-cvyid2.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Emerald, RG, Head
        id: 451,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/73fe8b06-1746-4951-be43-005c123c4451-dl6aov.glb', description: Prong4Desc },
            { value: 2, label: '8 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/3293bf84-1d38-4b0a-977d-3fe26f73e08f-bozt43.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a0736713-0c15-4474-a866-5361f7012f8b-u01jf5.glb' },
            { value: 4, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/3b50019d-3c52-437d-99cd-937d5aa34105-hyachp.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Oval, PT, Head
        id: 452,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1dc40608-c445-4522-a9fb-7207e806d65c-ew6bf4.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6fd7aa80-5e63-4830-8d85-9a1a16d66e0d-814tyq.glb' },
            { value: 3, label: 'Half Moon', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/96717dca-b18b-4ea0-b730-ca286439333c-dffafw.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d99664cf-27df-4d97-b938-4f6b6123ef8a-nzvk6s.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Oval, YG, Head
        id: 453,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/69c4300e-9f4e-4b6f-bd64-1a831af5fa7f-xfg9k6.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f7300436-ea8c-471c-b491-ad8271e0d707-eocn14.glb' },
            { value: 3, label: 'Half Moon', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5e2c6684-7d83-46fe-a625-a88586fcaa96-yw7aje.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ee3e8ae7-9aed-4efb-b307-89c14bad3926-1ae36y.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Oval, RG, Head
        id: 454,
        title: 'Select the Head',
        options: [
            { value: 1, label: '4 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bfa8a0e7-c1b4-47e6-8502-be7125b75037-8ymdpb.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6d2018d0-4262-4c7c-9d37-1013a56c602a-vvxj35.glb' },
            { value: 3, label: 'Half Moon', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/394b29d0-194b-48c3-a5d7-5d301a37eb4b-afdeoj.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6d19b249-ee98-4cf2-ab2b-c594701b12b5-n6fsnx.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Pear, PT, Head
        id: 455,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/8a310034-658b-4ae4-86bd-26e2f0d089d2-adzwsj.glb' },
            { value: 2, label: '5 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/0c50ea11-61a8-4a23-a204-f08d25b7f2fb-xbb26d.glb' },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/315de7f9-79cb-4e6e-9f15-ca98ded43583-nbeigo.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5b1afb7d-a508-4966-ab71-b91f4c67a184-aaeovs.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Pear, YG, Head
        id: 456,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d581aa85-969f-4175-bbe2-a6b58faba222-cbhk7b.glb' },
            { value: 2, label: '5 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fbcc60bc-6e26-4c64-8ab4-c29c07b09ec5-altl6j.glb' },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ffac4a31-d51e-4ab7-af51-b44e358178d8-lx1gu.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/76771ae7-bcfc-4555-a849-c51b30a68f9a-wzw5vm.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Pear, RG, Head
        id: 457,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/9dbf0362-3292-4414-85c4-81dd98c5459d-y8slwy.glb' },
            { value: 2, label: '5 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6eea65c9-559d-41d6-92d1-9f6129a411aa-dv0aoc.glb' },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/eb98b902-2c38-4b1f-abd0-580be9047d4e-nuwue1.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/51cf0026-ef0c-4ce3-a519-f8fdf577e4f7-dke08n.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Marquise, PT, Head
        id: 458,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 2 Prongs', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e7698bb8-f474-4fa9-b67c-c3419e63f5af-xo7js3.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ef4ef6f7-a697-455d-9f0f-d7272fe5c746-6wkk0i.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/04dd2052-3055-485e-af31-afba00f9dabf-vgxgdm.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a6285d6f-c94e-42d7-bb75-8e4901e6edf1-r2c1gg.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Marquise, YG, Head
        id: 459,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 2 Prongs', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f5a1cf55-7f0e-4efa-acb4-c751e0afd8b4-xo7jzh.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/be4a682c-78cf-49d0-87da-079d4f566895-6wkjt4.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/89569707-ba84-470a-9200-dbe12566ce3a-vgxgl0.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/585cdd3a-50f6-44d9-895a-c2f71d9c8144-r2c192.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Marquise, RG, Head
        id: 460,
        title: 'Select the Head',
        options: [
            { value: 1, label: 'Protected Edges 2 Prongs', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d469a1bc-764a-4381-bb76-50dd18e45846-xo7jtg.glb', description: Prong4Desc },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f969f487-043b-425f-a7b7-cbb22cf48288-6wkjz5.glb', description: Prong4Desc },
            { value: 3, label: 'Half Moon Bezel', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/7146388f-7eed-44d5-9624-11904cf4db96-vgxgez.glb' },
            { value: 4, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/3e60f213-6dae-4409-a039-f7c0be3a60d8-r2c1f3.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Trillion, PT, Head
        id: 461,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/58bfba86-aae9-4815-b09f-99140aa7d3d3-8yokq.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fd32a804-a3b9-4e26-a3f9-8dd4fafce58e-5wna0j.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c89f8ccc-833f-43e0-bfb0-b51b92de24f8-iu29ov.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Trillion, YG, Head
        id: 462,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5b35488a-895d-469d-8ca3-8d8f4dd6f793-henffk.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/3ead6da3-05b5-4f9a-a2b2-f811f1e5bcf7-b91gub.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a8322264-9f38-4300-8c72-24e8daa66d02-z1d1ff.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Trillion, RG, Head
        id: 463,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/943a8815-fa6d-41fc-8fc2-090a80019f32-5xppon.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/bc9cc511-b750-4c84-ab6e-5604fdcb7d2d-c3bo9w.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/7e2f67dd-9b9d-4935-b7eb-0186fdad1e01-cndvfi.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Curved Trillion, PT, Head
        id: 464,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/2cdc17c6-e195-40ee-a123-f293f1d96709-v52485.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e7684f2b-7983-4d29-a6be-17792dac6853-tnlz60.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 801, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e7684f2b-7983-4d29-a6be-17792dac6853-tnlz60.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Curved Trillion, YG, Head
        id: 465,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/c5a5d04d-54bf-4d18-a037-7f70274c41f0-kflin9.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1334f055-fe27-4c4e-a20b-cb3799a11a51-lx1npe.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 802, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/8bf8e9ba-d48f-4bd4-b10d-3bb16e15e368-4860n4.glb' }
            // Add more options as needed
        ]
    },
    { //Blue Sapphire, Curved Trillion, RG, Head
        id: 466,
        title: 'Select the Head',
        options: [
            { value: 1, label: '3 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ecaa9f5c-6a54-498b-9f17-ea41b043292b-uzi6wk.glb' },
            { value: 2, label: '6 Prong', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/05bf77a0-3b8b-4aa6-ab2d-afa8e04558e7-ti21uf.glb' },
            { value: 3, label: 'Bezel Set', imageUrl: '', nextQuestion: 803, sidebarName: 'question4', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/f6733981-4a06-48ee-bebb-a38506ccb137-nu6d2f.glb' }
            // Add more options as needed
        ]
    },






    { //PT Band Selection
        id: 801,
        title: 'Select Your Shank',
        options: [
            { value: 1, label: 'European Shank', imageUrl: 'https://utfs.io/f/9e28184c-6aa9-4a33-84a1-3eb43d1e5729-kjghpc.png', nextQuestion: 901, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e467e224-4e72-4ec0-9d2e-c54db5f68df7-9d71oy.glb', description: europeanshankdesc },
            { value: 2, label: 'Straight Band', imageUrl: 'https://utfs.io/f/0b9a934e-1714-4b8b-aab0-72916666c9ca-9gyg8j.png', nextQuestion: 902, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/4b096d80-88fa-47b1-82cc-a36f3b5e0af2-gu16hr.glb' },
            { value: 3, label: 'Straight Tapered Band', imageUrl: 'https://utfs.io/f/506671b8-b37d-486e-a967-9faf84093649-l24owq.png', nextQuestion: 903, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/da829070-4e6c-43b8-b697-d13f27ab2f59-c8fs6d.glb' },
            { value: 4, label: 'Tapered Band', imageUrl: 'https://utfs.io/f/4ad539d8-f76e-4486-a5bf-0074153ab37a-v2rwyl.png', nextQuestion: 904, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/a8358bda-038b-4d3a-aace-78fe30a9178d-152bxx.glb' },
            { value: 5, label: 'Knife Edge', imageUrl: 'https://utfs.io/f/688fa550-c0a3-4648-ba52-5c2052b2023e-1j9brh.png', nextQuestion: 913, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6d2a75ac-a3f8-4927-9e20-0c282b5b255f-2igsq4.glb', description: knifeedgedesc },
            { value: 6, label: 'Twist', imageUrl: '', nextQuestion: 914, sidebarName: 'question5', iframeUrl: '', description: twistdesc }
            // Add more options as needed
        ]
    },
    { //YG Band Selection
        id: 802,
        title: 'Select Your Shank',
        options: [
            { value: 1, label: 'European Shank', imageUrl: 'https://utfs.io/f/bcd7d55a-d199-4586-8786-b03e33e7c18f-kjghhy.png', nextQuestion: 905, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e9bea14d-19e5-440a-a750-14a3a158f9e9-2itk9d.glb', description: europeanshankdesc },
            { value: 2, label: 'Straight Band', imageUrl: 'https://utfs.io/f/160522a0-3b1c-4118-82c5-84276d29b56f-9gygfx.png', nextQuestion: 906, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/1a17e0ab-5caf-4fdb-9718-eabf3df7b018-9h82qm.glb' },
            { value: 3, label: 'Straight Tapered Band', imageUrl: 'https://utfs.io/f/4d5a0bf5-31db-4417-87fd-da1adb79df26-l24p44.png', nextQuestion: 907, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/8487bc7c-08d7-467f-9a17-fa08c5319b72-puuonu.glb' },
            { value: 4, label: 'Tapered Band', imageUrl: 'https://utfs.io/f/254b3f69-3204-4a91-9bb2-fdc4b33c4280-xpz3hs.png', nextQuestion: 908, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ed985201-35a8-41c7-91ae-31904ff7779a-v1j2ks.glb' },
            { value: 5, label: 'Knife Edge', imageUrl: 'https://utfs.io/f/7ff91f74-853a-4e52-b74f-acd4131f7790-utnbbg.png', nextQuestion: 915, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/d88540c0-2f7f-4668-ad7d-be7b47ed43e5-vbg7u7.glb', description: knifeedgedesc },
            { value: 6, label: 'Twist', imageUrl: '', nextQuestion: 916, sidebarName: 'question5', iframeUrl: '', description: twistdesc }
            // Add more options as needed
        ]
    },
    { //RG Band Selection
        id: 803,
        title: 'Select Your Shank',
        options: [
            { value: 1, label: 'European Shank', imageUrl: 'https://utfs.io/f/6feed4e3-50c9-454f-b1c0-93f18c028bc3-kjghnz.png', nextQuestion: 909, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/6d068489-05e3-441c-81ec-2a6735013c71-2itk3c.glb', description: europeanshankdesc },
            { value: 2, label: 'Straight Band', imageUrl: 'https://utfs.io/f/7da00969-5699-4b0a-aa6d-2f4be2a5e213-9gyg9w.png', nextQuestion: 910, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/2ffaf4b7-1836-43a2-ab35-34bac6e122e1-9h82kl.glb' },
            { value: 3, label: 'Straight Tapered Band', imageUrl: 'https://utfs.io/f/d4c27543-5ee6-48f9-bf51-6e1893e6dbfa-l24oy3.png', nextQuestion: 911, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/5913fbba-394b-4c99-8721-68d819a0adb6-puuoht.glb' },
            { value: 4, label: 'Tapered Band', imageUrl: 'https://utfs.io/f/5ca90a1e-fb9b-4c43-bb04-5f7b5ac6b50d-v2rwzy.png', nextQuestion: 912, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/ff460236-8d5f-465e-824f-e0725ccc6407-v1j2qt.glb' },
            { value: 5, label: 'Knife Edge', imageUrl: 'https://utfs.io/f/3540beb2-02fa-4915-96ce-0e6e3b967f18-utnb5f.png', nextQuestion: 917, sidebarName: 'question5', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/db6fbdc8-0e6b-49fc-8f70-75555855db48-irw44s.glb', description: knifeedgedesc },
            { value: 6, label: 'Twist', imageUrl: '', nextQuestion: 918, sidebarName: 'question5', iframeUrl: '', description: twistdesc }
            // Add more options as needed
        ]
    },







    { //PT EuroShank Side Stones
        id: 901,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },

        ]
    },
    { //YG EuroShank Side Stones
        id: 905,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { //RG EuroShank Side Stones
        id: 909,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { //PT StraightShank Side Stones
        id: 902,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },

        ]
    },
    { //YG StraightShank Side Stones
        id: 906,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { //RG StraightShank Side Stones
        id: 910,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { //PT StraightTaper Side Stones
        id: 903,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },

        ]
    },
    { //YG StraightTaper Side Stones
        id: 907,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { //RG StraightTaper Side Stones
        id: 911,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { //PT Straight Side Stones
        id: 904,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },

        ]
    },
    { //YG Straight Side Stones
        id: 908,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { //RG Straight Side Stones
        id: 912,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { // i think plat knife
        id: 913,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },

        ]
    },
    { // i think plat twist
        id: 914,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },

        ]
    },
    { // i think gold knife
        id: 915,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { // i think gold twist
        id: 916,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },

        ]
    },
    { // i think rg knife
        id: 917,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },
        ]
    },
    { // i think rg twist
        id: 918,
        title: 'Click the total amount of stones you would like in your ring.',
        options: [
            { value: 4, label: 'Solitaire', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=' },
            { value: 1, label: '3 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/e2ac90cb-93f3-49c5-bd88-3dd57e43ee0b-u0cc51.glb' },
            { value: 2, label: '7 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/34a80102-ff56-48a7-b6c6-a8091298a51e-yfx33t.glb' },
            { value: 3, label: '11 Stone', imageUrl: '', nextQuestion: 95, sidebarName: 'question6', iframeUrl: 'https://mkneuffer.github.io/viewerNoLogo/ViewerWithNoLogo.html?m=https://utfs.io/f/fea6540c-d0c9-4f07-83c4-0ff3806d1a37-6cz3lu.glb' },

        ]
    },


   {
        id: 89,
        title: "Ring Size?",
        type: "dropdown",
        options: [
            {label: "4", value: "4", nextQuestion: 90, sidebarName: "question89"},
            {label: "4 ¼", value: "4 ¼", nextQuestion: 90, sidebarName: "question89"},
            {label: "4 ½", value: "4 ½", nextQuestion: 90, sidebarName: "question89"},
            {label: "4 ¾", value: "4 ¾", nextQuestion: 90, sidebarName: "question89"},
            {label: "5", value: "5", nextQuestion: 90, sidebarName: "question89"},
            {label: "5 ¼", value: "5 ¼", nextQuestion: 90, sidebarName: "question89"},
            {label: "5 ½", value: "5 ½", nextQuestion: 90, sidebarName: "question89"},
            {label: "5 ¾", value: "5 ¾", nextQuestion: 90, sidebarName: "question89"},
            {label: "6", value: "6", nextQuestion: 90, sidebarName: "question89"},
            {label: "6 ¼", value: "6 ¼", nextQuestion: 90, sidebarName: "question89"},
            {label: "6 ½", value: "6 ½", nextQuestion: 90, sidebarName: "question89"},
            {label: "6 ¾", value: "6 ¾", nextQuestion: 90, sidebarName: "question89"},
            {label: "7", value: "7", nextQuestion: 90, sidebarName: "question89"},
            {label: "7 ¼", value: "7 ¼", nextQuestion: 90, sidebarName: "question89"},
            {label: "7 ½", value: "7 ½", nextQuestion: 90, sidebarName: "question89"},
            {label: "7 ¾", value: "7 ¾", nextQuestion: 90, sidebarName: "question89"},
            {label: "8", value: "8", nextQuestion: 90, sidebarName: "question89"},
            {label: "8 ¼", value: "8 ¼", nextQuestion: 90, sidebarName: "question89"},
            {label: "8 ½", value: "8 ½", nextQuestion: 90, sidebarName: "question89"},
            {label: "8 ¾", value: "8 ¾", nextQuestion: 90, sidebarName: "question89"},
            {label: "9", value: "9", nextQuestion: 90, sidebarName: "question89"},
            {label: "9 ¼", value: "9 ¼", nextQuestion: 90, sidebarName: "question89"},
            {label: "9 ½", value: "9 ½", nextQuestion: 90, sidebarName: "question89"},
            {label: "9 ¾", value: "9 ¾", nextQuestion: 90, sidebarName: "question89"},
            {label: "10", value: "10", nextQuestion: 90, sidebarName: "question89"},
            {label: "Not Sure", value: "Not Sure", nextQuestion: 90, sidebarName: "question89"}
        ]
    },
    {
        id: 90,
        title: "What is your approximate budget?",
        type: "dropdown",
        options: [
            { label: "$1,000 - $2,000", value: "$1,000 - $2,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$2,000 - $3,000", value: "$2,000 - $3,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$3,000 - $4,000", value: "$3,000 - $4,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$4,000 - $5,000", value: "$4,000 - $5,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$5,000 - $6,000", value: "$5,000 - $6,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$6,000 - $7,000", value: "$6,000 - $7,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$7,000 - $8,000", value: "$7,000 - $8,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$8,000 - $9,000", value: "$8,000 - $9,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$9,000 - $10,000", value: "$9,000 - $10,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$10,000 - $12,000", value: "$10,000 - $12,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$12,000 - $14,000", value: "$12,000 - $14,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$14,000 - $16,000", value: "$14,000 - $16,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$16,000 - $18,000", value: "$16,000 - $18,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$18,000 - $20,000", value: "$18,000 - $20,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "$18,000 - $20,000", value: "$18,000 - $20,000", nextQuestion: 91, sidebarName: "question90" },
            { label: "Whatever it takes", value: "Whatever it takes", nextQuestion: 91, sidebarName: "question90" },
            { label: "Other", value: "Other", nextQuestion: 91, sidebarName: "question90" },
        ]
    },
    {
        id: 91,
        title: 'Additional Notes, Comments, or Questions:',
        options: [
            { value: 'textArea', label: 'TextArea', nextQuestion: 92, sidebarName: 'question91'}
        ]
    },
    {
        id: 92,
        title: 'Please enter your name:',
        options: [
            { value: 'textInput', label: 'TextInput', nextQuestion: 93, sidebarName: 'question92' }
        ]
    },
    {
        id: 93,
        title: 'Please enter your email:',
        options: [
            { value: 'textInput', label: 'TextInput', nextQuestion: null, sidebarName: 'question93' }
        ]
    },

    // Add more questions as needed


];

questions.push({
    id: 95,
    title: "Preview Your Custom Ring",
    description: "Here is a preview of your custom ring based on your selections.",
    options: []
});


