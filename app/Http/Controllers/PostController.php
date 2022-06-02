<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __invoke()
    {
        return[
            [
                'id' => 1,
                'name' => 'Robby',
                'age' => 20,
                'job' => 'It Specialist',
            ],
            [
                'id' => 2,
                'name' => 'Katrin',
                'age' => 18,
                'job' => 'Manager',
            ],
            [
                'id' => 3,
                'name' => 'Sally',
                'age' => 52,
                'job' => 'Manager',
            ],
            [
                'id' => 4,
                'name' => 'George',
                'age' => 32,
                'job' => 'Traveler',
            ],
            [
                'id' => 5,
                'name' => 'Stanly',
                'age' => 15,
                'job' => 'Youtuber',

            ]
        ];
    }
}
