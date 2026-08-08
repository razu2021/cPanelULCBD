<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Export PDF</title>
    <style>
        body {
            font-family: monospace; /* monospaced font for JSON */
            font-size: 12px;
        }
        pre {
            white-space: pre-wrap; /* wrap long lines */
            word-break: break-word;
        }
    </style>
</head>
<body>
    <pre>
        {!! json_encode($dataJson, JSON_PRETTY_PRINT) !!}
    </pre>
</body>
</html>