<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Http\Resources\PersonCollection;
use App\Models\Person;

class IndexController extends Controller
{
    public function __invoke()
    {
        return new PersonCollection(Person::all());
    }
}
