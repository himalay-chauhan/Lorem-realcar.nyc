var seoCategory=function(){function checkImages(obj){var images=[];for(var prop in obj)obj[prop]&&images.push(obj[prop]);return images}function Category(data){this["@context"]="http://schema.org",this["@type"]="Product",this.name=data.name,this.brand={"@type":"Brand",name:"RealCar",url:"https://realcar.nyc"},this.image=checkImages(data.images),this.image.length||delete this.image,this.description=data.description,data.images.medium&&(this.logo=data.images.medium),this.offers={"@type":"AggregateOffer",name:data.offers.name,availability:"http://schema.org/InStock",priceCurrency:"USD",highprice:data.offers.highprice,lowprice:data.offers.lowprice,url:data.offers.url,offerCount:data.offers.offerCount}}return{addMicroData:function(id,data){var categoryData=new Category(data),seoId="seo-category-"+id,isTagExist=document.getElementById(seoId),head=document.getElementsByTagName("head")[0],script=document.createElement("script");isTagExist||(script.type="application/ld+json",script.setAttribute("id",seoId),script.appendChild(document.createTextNode(JSON.stringify(categoryData))),head.appendChild(script))}}}();