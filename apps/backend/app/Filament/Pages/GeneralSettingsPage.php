<?php

namespace App\Filament\Pages;

use App\Settings\GeneralSettings;
use BackedEnum;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Pages\SettingsPage;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;

class GeneralSettingsPage extends SettingsPage
{
    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedCog6Tooth;

    protected static string $settings = GeneralSettings::class;

    protected static string|\UnitEnum|null $navigationGroup = 'Settings';

    protected static ?string $slug = 'settings/general';

    protected static ?string $navigationLabel = 'General';

    protected static ?string $title = 'General Settings';

    protected static ?int $navigationSort = 1;

    public function form(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('General')->description('Basic website configuration.')->schema([ 
                TextInput::make('site_name')->label('Site name')->required() 
            ]),
            Section::make('Branding')->description('Configure the logos used throughout the application.')->schema([ 
                FileUpload::make('logo_light')
                    ->label('Light logo')
                    ->image()
                    ->disk('public')
                    ->directory('logos')
                    ->visibility('public')
                    ->imageEditor(), 
                FileUpload::make('logo_dark')
                    ->label('Dark logo')
                    ->image()
                    ->disk('public')
                    ->directory('logos')
                    ->visibility('public')
                    ->imageEditor()
                ]) ->columns(2),
        ])->columns(1);
    }
}
