function drawInfobox(category, infoboxContent, json, i){

    if(json[i].color)          { var color = json[i].color }
        else                        { color = '' }
    if( json[i].city )        { var price = '<div class="price">' + json[i].city +  '</div>' }
        else                        { price = '' }
    if(json[i]._id)             { var id = json[i]._id }
        else                        { id = '' }
    if(json[i].url)            { var url = json[i].url }
        else                        { url = '' }
    if(json[i].type)           { var type = json[i].type }
        else                        { type = '' }
    if(json[i].title)          { var title = json[i].title }
        else                        { title = '' }
    if(json[i].contact.address)       { var location = json[i].contact.address }
        else                        { location = '' }
		
	if(json[i].name)       { var name = json[i].name }
        else                        { name = '' }
 /* if(json[i].gallery[0])     { var gallery = json[i].gallery[0] }
        else                        { gallery[0] = '../img/default-item.jpg' }
*/
gallery= 'views/assets/img/hotel-winter.jpg';
    var ibContent = '';
    ibContent =
    '<div class="infobox ' + color + '">' +
        '<div class="inner">' +
            '<div class="image">' +
                '<div class="item-specific">' + drawItemSpecific(category, json, i) + '</div>' +
                '<div class="overlay">' +
                    '<div class="wrapper">' +
                        '<a href="#/listings/'+id+'" class="quick-view" data-toggle="modal" data-target="#modal" id="' + id + '">Quick View</a>' +
                        '<hr>' +
                        '<a href="#/listings/'+id+'" class="detail">Go to Detail</a>' +
                    '</div>' +
                '</div>' +
                '<a href="#/listings/'+id+'" class="description">' +
                    '<div class="meta">' +
                        price +
                        '<h2>' + name +  '</h2>' +
                        '<figure>' + location +  '</figure>' +
                        '<i class="fa fa-angle-right"></i>' +
                    '</div>' +
                '</a>' +
              '<img src="' + gallery +  ' " class="img-responsive">' +
            '</div>' +
        '</div>' +
    '</div>';

    return ibContent;
}