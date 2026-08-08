<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Category PDF</title>
    <style>
        body {
            font-family: 'DejaVu Sans', sans-serif;
        }
        header, footer {
            background-color: #4CAF50;
            color: white;
            padding: 5px;
            border-radius: 20px;

        }
       
        header h2{
          text-align: center;
        }


        footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        table, th, td {
            border: 1px solid #333;
        }
        th, td {
            padding: 6px;
            text-align: left;
        }
    </style>
</head>
<body>

    <header >
        <h2>{{config('app.name')}}</h2>
    </header>

    <main>
      
        <table>
            <tbody>
                    {{-- end  --}}
                    <tr>
                        <td>Name</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->name ?? 'N/A'}}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Title</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->title ?? 'N/A'}}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Description</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->description ?? 'N/A'}}</td>
                    </tr>
                    {{-- end  --}}
                   


                {{-- ======================================================================= --}}
                    <tr>
                        <td>Id</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->id ?? 'N/A'}}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Order</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->order ?? 'N/A'}}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Slug</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->slug ?? 'N/A'}}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Creator</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->creator->name ?? 'N/A' }}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Editor</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->editor->name ?? 'N/A' }}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Public Status</td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->public_status === 1 ? 'Active' : 'Inactive' }}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Created At </td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->created_at?->format('d M Y') }}</td>
                    </tr>
                    {{-- end  --}}
                    <tr>
                        <td>Updated At </td>
                        <td><strong> : </strong></td>
                        <td>{{ $data->updated_at?->format('d M Y') }}</td>
                    </tr>
                    {{-- end  --}}
               
            </tbody>
        </table>
    </main>

    <footer>
        <p> © {{ date('Y') }} {{config('app.name')}} — All rights reserved</p>
    </footer>

</body>
</html>