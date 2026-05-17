# ProjectName SDK exists test

import pytest
from adviceslipapi2_sdk import AdviceSlipApi2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AdviceSlipApi2SDK.test(None, None)
        assert testsdk is not None
