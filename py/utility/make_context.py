# AdviceSlipApi2 SDK utility: make_context

from core.context import AdviceSlipApi2Context


def make_context_util(ctxmap, basectx):
    return AdviceSlipApi2Context(ctxmap, basectx)
