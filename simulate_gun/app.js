import bridge from '@vkontakte/vk-bridge';

bridge.send("VKWebAppInit", {});



function show_ad() {

bridge.send('VKWebAppCheckNativeAds', { ad_format: 'interstitial' })
  .then((data) => {
    if (data.result) {
      // Предзагруженная реклама есть.
 
      // Теперь можно создать кнопку
      // "Прокачать героя за рекламу".   
      // ...
            


		bridge.send('VKWebAppShowNativeAds', { ad_format: 'interstitial' })
  		.then((data) => {
    		if (data.result)
      		console.log('Реклама показана');
    		else
      		console.log('Ошибка при показе');
  		})
  		.catch((error) => { console.log(error); /* Ошибка */ });




      } else {
        console.log('Рекламные материалы не найдены.');
      }
  })
  .catch((error) => { console.log(error); /* Ошибка */  });




}