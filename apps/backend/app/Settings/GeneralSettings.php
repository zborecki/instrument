<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class GeneralSettings extends Settings
{
    public string $site_name;

    public ?string $logo_dark;
    public ?string $logo_light;

    public static function group(): string
    {
        return 'general';
    }
}