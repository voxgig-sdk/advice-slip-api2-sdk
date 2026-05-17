<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK exists test

require_once __DIR__ . '/../adviceslipapi2_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AdviceSlipApi2SDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
