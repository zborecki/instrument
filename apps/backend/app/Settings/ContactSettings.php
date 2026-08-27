<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class ContactSettings extends Settings
{
    public string $email;

    public static function group(): string
    {
        return 'contact';
    }
}