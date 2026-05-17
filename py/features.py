# AdviceSlipApi2 SDK feature factory

from feature.base_feature import AdviceSlipApi2BaseFeature
from feature.test_feature import AdviceSlipApi2TestFeature


def _make_feature(name):
    features = {
        "base": lambda: AdviceSlipApi2BaseFeature(),
        "test": lambda: AdviceSlipApi2TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
