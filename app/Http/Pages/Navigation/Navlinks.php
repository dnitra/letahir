<?php

namespace App\Http\Pages\Navigation;


class Navlinks {
    protected static $navLinks =  [
            [
                'label' => 'Domů',
                'routeName' => 'home',
            ],
            [
                'label' => 'O nás',
                'routeName' => 'about',

            ],
            [
                'label' => 'Úklidové služby',
                'routeName' => 'products.list',
            ]
    ];
    public static function getNavLinks(){
        return self::$navLinks;
    }
}

