import React, { useEffect, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,

  } from "@/components/ui/dropdown-menu"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    // ColumnDef,
    // ColumnFiltersState,
    // SortingState,

    // VisibilityState,
    flexRender,
    getCoreRowModel,
    // getFilteredRowModel,
    getPaginationRowModel,
    
    
    // getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table"
  
  import { ArrowUpDown, ChevronDown, MoreHorizontal, PlusIcon } from "lucide-react"
   
  import { Button } from "@/components/ui/button"
  import { Checkbox } from "@/components/ui/checkbox"

//   import { Input } from "@/components/ui/input"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export const Columns = [
    {
        // accessorKey: "select",
        id: "select",
        header: ({ table }) => (
          <Checkbox
          className=""
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
            <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
            />
        )
    },
    {
        accessorKey: "FirstName",
        header: "First Name",
    },
    {
        accessorKey: "LastName",
        header: "Last Name",
    },
    {
        accessorKey: "PhoneNumber",
        header: "Phone Number",
    },
    {
        accessorKey: "Partner",
        header: "Partner",
    },
    {
        accessorKey: "Location",
        header: "Location",
    },
    {
        accessorKey: "Status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.getValue("Status")
            return(
            <span className={` text-sm leading-[17px]  px-2 py-1 rounded  ${ 
                status === 'Active' ? 'bg-[rgba(39,167,19,0.1)] text-[#27A713]' 
                : status === 'Deactivated' ? 'bg-[rgba(255,0,0,0.1)] text-[#FF0000]' 
                : 'text-[#FF9900] bg-[rgba(255,153,0,0.1)]'} `}>{status}</span>
            )
        }
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            // const payment = row.original
 
            return (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    {/* <MoreHorizontal className="h-4 w-4" /> */}
                    <img src="/Icon-more.svg" alt=" open menu" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Action 1</DropdownMenuItem>
                  <DropdownMenuItem>Action 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>)
        }
    }

]  

const trialData = [
    {
        FirstName: "John",
        LastName: "Doe",
        PhoneNumber: "1234567890",
        Partner: "Yes",
        Location: "USA",
        Status: "Active",
    },
    
        { 
          "FirstName": "John",
          "LastName": "Doe",
          "PhoneNumber": "123-456-7890",
          "Partner": "Company A",
          "Location": "New York",
          "Status": "Active"
        },
        { 
          "FirstName": "Jane",
          "LastName": "Smith",
          "PhoneNumber": "987-654-3210",
          "Partner": "Company B",
          "Location": "Los Angeles",
          "Status": "Awaiting approval"
        },
        { 
          "FirstName": "Alice",
          "LastName": "Johnson",
          "PhoneNumber": "555-555-5555",
          "Partner": "Company C",
          "Location": "Chicago",
          "Status": "Deactivated"
        },
        { 
          "FirstName": "Michael",
          "LastName": "Brown",
          "PhoneNumber": "333-333-3333",
          "Partner": "Company D",
          "Location": "Houston",
          "Status": "Active"
        },
        { 
          "FirstName": "Emily",
          "LastName": "Davis",
          "PhoneNumber": "222-222-2222",
          "Partner": "Company E",
          "Location": "Phoenix",
          "Status": "Deactivated"
        },
        { 
          "FirstName": "Robert",
          "LastName": "Wilson",
          "PhoneNumber": "444-444-4444",
          "Partner": "Company F",
          "Location": "Philadelphia",
          "Status": "Active"
        },
        { 
          "FirstName": "Olivia",
          "LastName": "Taylor",
          "PhoneNumber": "666-666-6666",
          "Partner": "Company G",
          "Location": "San Antonio",
          "Status": "Awaiting approval"
        },
        { 
          "FirstName": "David",
          "LastName": "Anderson",
          "PhoneNumber": "777-777-7777",
          "Partner": "Company H",
          "Location": "San Diego",
          "Status": "Deactivated"
        },
        { 
          "FirstName": "Sophia",
          "LastName": "Martinez",
          "PhoneNumber": "888-888-8888",
          "Partner": "Company I",
          "Location": "Dallas",
          "Status": "Active"
        },
        { 
          "FirstName": "Daniel",
          "LastName": "Thomas",
          "PhoneNumber": "999-999-9999",
          "Partner": "Company J",
          "Location": "San Jose",
          "Status": "Awaiting approval"
        },
        { 
          "FirstName": "Isabella",
          "LastName": "Hernandez",
          "PhoneNumber": "123-321-1234",
          "Partner": "Company K",
          "Location": "New York",
          "Status": "Deactivated"
        },
        { 
          "FirstName": "Matthew",
          "LastName": "Lopez",
          "PhoneNumber": "456-654-4567",
          "Partner": "Company L",
          "Location": "Los Angeles",
          "Status": "Active"
        },
        { 
          "FirstName": "Emma",
          "LastName": "Gonzalez",
          "PhoneNumber": "789-987-7890",
          "Partner": "Company M",
          "Location": "Chicago",
          "Status": "Awaiting approval"
        },
        { 
          "FirstName": "Alexander",
          "LastName": "Perez",
          "PhoneNumber": "987-789-9876",
          "Partner": "Company N",
          "Location": "Houston",
          "Status": "Deactivated"
        },
        { 
          "FirstName": "Mia",
          "LastName": "Sanchez",
          "PhoneNumber": "654-456-6543",
          "Partner": "Company O",
          "Location": "Phoenix",
          "Status": "Active"
        },
        { 
          "FirstName": "James",
          "LastName": "Rivera",
          "PhoneNumber": "321-123-3210",
          "Partner": "Company P",
          "Location": "Philadelphia",
          "Status": "Awaiting approval"
        },
        { 
          "FirstName": "Charlotte",
          "LastName": "Gomez",
          "PhoneNumber": "111-222-3333",
          "Partner": "Company Q",
          "Location": "San Antonio",
          "Status": "Active"
        },
        { 
          "FirstName": "Ethan",
          "LastName": "Torres",
          "PhoneNumber": "444-555-6666",
          "Partner": "Company R",
          "Location": "San Diego",
          "Status": "Deactivated"
        },
        { 
          "FirstName": "Amelia",
          "LastName": "Ramirez",
          "PhoneNumber": "777-888-9999",
          "Partner": "Company S",
          "Location": "Dallas",
          "Status": "Active"
        },
        { 
          "FirstName": "Benjamin",
          "LastName": "Wood",
          "PhoneNumber": "333-444-5555",
          "Partner": "Company T",
          "Location": "San Jose",
          "Status": "Awaiting approval"
        }
      
      
]

const DataTable = ({columns, data}) => {
    
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })
    return (
        <div style={{ boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.06)', 
        // height: 'calc(100vh - 280px)'
         }} className='bg-white relative rounded   mt-8'>
            <div>
                <Table className="" >
                    <TableHeader className="sticky bg-white top-0">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                <TableHead className=" text-[#1A1619] font-bold text-sm leading-[17px]" key={header.id}>
                                    {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                        )}
                                </TableHead>
                                )
                            })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody >
                        {table.getRowModel().rows.length > 0 ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow className="text-sm leading-[17px]" key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ):(
                            <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                Loading...
                            </TableCell>
                            </TableRow>
                        )
                        }
                    </TableBody>
                   
                </Table>
                <div className='flex items-center text-xs px-6 py-4 justify-between'>
                        <div className='flex gap-4 items-center '>
                            <span className='text-[#808080]' onClick={()=> table.setPageSize(5)}>Rows per page</span>
                            <Select onValueChange={value => table.setPageSize(Number(value))} defaultValue="10">
                                <SelectTrigger className="w-[89px]">
                                    <SelectValue  placeholder={table.getState().pagination.pageSize} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem  value="5">5</SelectItem>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="20">20</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button 
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                            className={`${!table.getCanPreviousPage() ? 'text-[#4A4A4A]':'text-[#039BF0]'}`}
                            >Previous</button>
                            <div className='flex items-center gap-2'>
                                {table.getPageOptions().map((page) => (
                                    <span className={`${page === table.getState().pagination.pageIndex ? 'text-[#039BF0]':'text-[#808080]'}`} key={page}>
                                        {page + 1}
                                    </span>
                                ))}
                            </div>
                            <button
                            className={`${!table.getCanNextPage() ? 'text-[#4A4A4A]':'text-[#039BF0]'}`}
                              onClick={() => table.nextPage()}
                              disabled={!table.getCanNextPage()}
                            >Next</button>
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

const Verifiers = () => {
    const [FetchedData, setFetchedData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [filter, setFilter] = useState('All')
    const [filterValue, setFilterValue] = useState("")
    const handleSearch = (e) => {
        const value = e.target.value
        if(!value){
            setFetchedData(trialData)
            setFilter("All")
            return
        }

        const filterd = trialData.filter((item) => {
          if(filterValue.length > 0) {
            return (item.FirstName.toLowerCase().includes(value.toLowerCase()) || item.LastName.toLowerCase().includes(value.toLowerCase()) || item.PhoneNumber.toLowerCase().includes(value.toLowerCase()) || item.Location.toLowerCase().includes(value.toLowerCase())) && item.Status === filterValue
          }else{
            return item.FirstName.toLowerCase().includes(value.toLowerCase()) || item.LastName.toLowerCase().includes(value.toLowerCase()) || item.PhoneNumber.toLowerCase().includes(value.toLowerCase()) || item.Location.toLowerCase().includes(value.toLowerCase()) 
          }
        })
        setFetchedData(filterd)
    }
    const handleStatusfilter = (value) => {
        if(value === 'All'){
            setFetchedData(trialData)
            setFilter(value)
            setFilterValue("")

            return
        }
        const filterd = trialData.filter((item) => {
            const type = value === 'Active' ? 'Active Verifiers' : value === 'Deactivated' ? 'Deactivated Verifiers' : value === 'Awaiting approval' ? 'Pending Verifiers' : 'All' 
            setFilter(type)
            setFilterValue(value)
            return item.Status === value
        })
        setFetchedData(filterd)
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setTimeout(() => {
                setFetchedData(trialData)
                setIsLoading(false)
            }, 3000)
        }
        fetchData()
    }, [])
  return (
    <div className='w-full p-8 h-full bg-gray-50'>
        <div className='w-full   flex justify-between items-center'>
            <div >
                <DropdownMenu>
                    <DropdownMenuTrigger className='w-[212px] bg-white rounded border flex justify-between items-center border-[#EEEEEE] h-fit text-sm leading-[17px] px-3 py-3 '>
                        <span>{filter}</span>
                        <img src="/chevron-down.svg" alt="drop down" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent style={{boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.06)'}} className="w-[212px]  rounded border border-[#EEEEEE] p-0">
                        <DropdownMenuItem onClick={() => handleStatusfilter('All')} className="rounded-none py-[14px] px-2 hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] text-[#1A1A1A] leading-5 text-sm ">All</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusfilter("Active")} className="rounded-none py-[14px] px-2 hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] text-[#1A1A1A] leading-5 text-sm ">Active Verifiers</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusfilter("Awaiting approval")} className="rounded-none py-[14px] px-2 hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] text-[#1A1A1A] leading-5 text-sm ">Pending Verifiers</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleStatusfilter("Deactivated")} className="rounded-none py-[14px] px-2 hover:bg-[#F1F1F1] focus:bg-[#F1F1F1] text-[#1A1A1A] leading-5 text-sm ">Deactivated Verifiers</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='flex gap-4 items-center'>
                <input onChange={handleSearch} type="text" placeholder="Name/Phone no / Location" className='p-3 w-[240px] border rounded border-[#EEEEEE]' />
                <Button className='py-4 px-3 h-fit bg-[#039BF0]'> <PlusIcon width={14} className='mr-2' /> Add New Verifier</Button>
            </div>
        </div>
        <div>
            <DataTable columns={Columns} data={FetchedData} />
        </div>
    </div>
  )
}

export default Verifiers
// box-shadow: 0px 4px 10px 0px #0000000F;
