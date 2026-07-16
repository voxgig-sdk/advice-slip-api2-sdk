<?php
declare(strict_types=1);

// AdviceSlipApi2 SDK base feature

class AdviceSlipApi2BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(AdviceSlipApi2Context $ctx, array $options): void {}
    public function PostConstruct(AdviceSlipApi2Context $ctx): void {}
    public function PostConstructEntity(AdviceSlipApi2Context $ctx): void {}
    public function SetData(AdviceSlipApi2Context $ctx): void {}
    public function GetData(AdviceSlipApi2Context $ctx): void {}
    public function GetMatch(AdviceSlipApi2Context $ctx): void {}
    public function SetMatch(AdviceSlipApi2Context $ctx): void {}
    public function PrePoint(AdviceSlipApi2Context $ctx): void {}
    public function PreSpec(AdviceSlipApi2Context $ctx): void {}
    public function PreRequest(AdviceSlipApi2Context $ctx): void {}
    public function PreResponse(AdviceSlipApi2Context $ctx): void {}
    public function PreResult(AdviceSlipApi2Context $ctx): void {}
    public function PreDone(AdviceSlipApi2Context $ctx): void {}
    public function PreUnexpected(AdviceSlipApi2Context $ctx): void {}
}
