<?php

namespace App\Services;

use Error;
use Socket;
use Throwable;

class RCONService
{
    protected Socket $socket;

    protected bool $connected;

    protected function connect(): void
    {
        if (!function_exists('socket_create')) {
            abort(500, 'Socket extension is not installed');
        }
        if (!env('RCON_ENABLED', false)) {
            abort(500, 'RCON is not enabled');
        }

        try {
            $this->socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
        } catch (Throwable) {
            throw new Error('Socket creation failed');
        }

        try {
            $this->connected = socket_connect($this->socket, env('RCON_HOST'), env('RCON_PORT'));
        } catch (Throwable) {
            throw new Error('Socket connect failed');
        }
    }
}
