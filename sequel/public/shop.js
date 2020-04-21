function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function addProduct (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
}

function createProductCard (product1) {
    return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="product-name">${product1.name}</h4>
        <div class="product-manufacturer">${product1.manufacturer}</div>
        <div class="row">
            <div class="col m-3 p-3">
                <b>Rs. ${product1.price}</b>
            </div>
            <button class="col btn btn-primary m-3">Buy</button> 
        </div>
    </div>`
        )
}