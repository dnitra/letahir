<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');
Route::get('/o-nas', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/uklidove-sluzby/{product}/objednavka', function ($product) {
    $urlRemapArray = [
        'uklid-domacnosti' => 'Home',
        'uklid-kancelare' => 'Office',
        'myti-oken' => 'Windows',
    ];

    return Inertia::render("Products/$urlRemapArray[$product]/Order", ['product' => $urlRemapArray[$product]]);
})->name('products.order');

Route::get('/uklidove-sluzby/{product}', function ($product) {

    $products= [
        'uklid-domacnosti' => [
            'id' => 1,
            'title' => 'Úklid domácnosti',
            'heading' => 'Úklid domácnosti',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor ultrices, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.',
            'prettyUrl' => 'uklid-domacnosti',
            'image' => 'https://thermo-plus.cz/img/projekty/amalka/vizualizace/1.jpg',
            'previousProductUrl' => 'myti-oken',
            'nextProductUrl' => 'uklid-kancelare',
        ],
        'uklid-kancelare' => [
            'id' => 2,
            'title' => 'Úklid kanceláře',
            'heading' => 'Úklid kanceláře',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor ultrices, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.',
            'prettyUrl' => 'uklid-kancelare',
            'image' => 'https://www.flexioffice.cz/uploads/4/6/A/0/4/46A04C242B53F9EC406C00B195D79C53130F644E94016C45E2D5429CF58F6792179C3188A130C4D193224B7DE629A72787AC7025B662F1E28373594969A21C56-1024x768.jpg',
            'previousProductUrl' => 'uklid-domacnosti',
            'nextProductUrl' => 'myti-oken',
        ],
        'myti-oken' => [
            'id' => 3,
            'title' => 'Mytí oken',
            'heading' => 'Mytí oken',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor ultrices, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.',
            'prettyUrl' => 'myti-oken',
            'image' => 'https://www.lomax.cz/sites/default/files/styles/teaser_3/public/images/2023/04/lomax-okna.jpg.webp?itok=dT-7sav_',
            'previousProductUrl' => 'uklid-kancelare',
            'nextProductUrl' => 'uklid-domacnosti',
        ]
    ];
    return Inertia::render("Products/Show", ['product' => $products[$product]]);
})->name('products.show');


Route::get('/uklidove-sluzby', function () {
    $products= [
        'uklid-domacnosti' => [
            'id' => 1,
            'title' => 'Úklid domácnosti',
            'heading' => 'Úklid domácnosti',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor ultrices, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.',
            'prettyUrl' => 'uklid-domacnosti',
            'image' => 'https://thermo-plus.cz/img/projekty/amalka/vizualizace/1.jpg',
            'previousProductUrl' => 'myti-oken',
            'nextProductUrl' => 'uklid-kancelare',
        ],
        'uklid-kancelare' => [
            'id' => 2,
            'title' => 'Úklid kanceláře',
            'heading' => 'Úklid kanceláře',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor ultrices, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.',
            'prettyUrl' => 'uklid-kancelare',
            'image' => 'https://www.flexioffice.cz/uploads/4/6/A/0/4/46A04C242B53F9EC406C00B195D79C53130F644E94016C45E2D5429CF58F6792179C3188A130C4D193224B7DE629A72787AC7025B662F1E28373594969A21C56-1024x768.jpg',
            'previousProductUrl' => 'uklid-domacnosti',
            'nextProductUrl' => 'myti-oken',
        ],
        'myti-oken' => [
            'id' => 3,
            'title' => 'Mytí oken',
            'heading' => 'Mytí oken',
            'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget tempor ultrices, nunc nisl ultricies nunc, nec aliquam nisl nisl nec nisl. Sed vitae nisl eget nisl aliquet aliquam. Sed vitae nisl eget nisl aliquet aliquam.',
            'prettyUrl' => 'myti-oken',
            'image' => 'https://www.lomax.cz/sites/default/files/styles/teaser_3/public/images/2023/04/lomax-okna.jpg.webp?itok=dT-7sav_',
            'previousProductUrl' => 'uklid-kancelare',
            'nextProductUrl' => 'uklid-domacnosti',
        ]
    ];
    return Inertia::render('Products/List', ['products' => array_values($products)]);
})->name('products.list');

