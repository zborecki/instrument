<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

return new class extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('general.logo_dark', null);
        $this->migrator->add('general.logo_light', null);
    }
};
