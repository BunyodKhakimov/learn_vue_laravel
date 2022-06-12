<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Models\Person;

class DeleteController extends Controller
{
    public function __invoke(Person $person)
    {
        try {
            $person->deleteOrFail();
            return response()->json(null, 204);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], $e->getCode());
        }
    }
}
