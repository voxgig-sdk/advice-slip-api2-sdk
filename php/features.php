<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class AdviceSlipApi2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new AdviceSlipApi2BaseFeature();
            case "test":
                return new AdviceSlipApi2TestFeature();
            default:
                return new AdviceSlipApi2BaseFeature();
        }
    }
}
