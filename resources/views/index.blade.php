@extends('layouts.app')

@section('content')
<Index></Index>
@endsection
<script>
    import Index from "../js/components/Index";
    export default {
        components: {Index}
    }
</script>
