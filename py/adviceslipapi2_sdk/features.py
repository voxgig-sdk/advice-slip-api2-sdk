# AdviceSlipApi2 SDK feature factory

from adviceslipapi2_sdk.feature.base_feature import AdviceSlipApi2BaseFeature
from adviceslipapi2_sdk.feature.ratelimit_feature import AdviceSlipApi2RatelimitFeature
from adviceslipapi2_sdk.feature.retry_feature import AdviceSlipApi2RetryFeature
from adviceslipapi2_sdk.feature.test_feature import AdviceSlipApi2TestFeature
from adviceslipapi2_sdk.feature.timeout_feature import AdviceSlipApi2TimeoutFeature


_FEATURES = {
    "base": lambda: AdviceSlipApi2BaseFeature(),
    "ratelimit": lambda: AdviceSlipApi2RatelimitFeature(),
    "retry": lambda: AdviceSlipApi2RetryFeature(),
    "test": lambda: AdviceSlipApi2TestFeature(),
    "timeout": lambda: AdviceSlipApi2TimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
