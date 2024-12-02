'use client'
import React from 'react'
import {BarChart as GraphBar, ResponsiveContainer, XAxis, YAxis, Bar } from 'recharts'

type Props = {}

const data = [
    {
        name: "Mon",
        total: Math.floor(Math.random() *500)+500
    },
    {
        name: "Tue",
        total: Math.floor(Math.random() *500)+500
    },
    {
        name: "Wed",
        total: Math.floor(Math.random() *500)+500
    },
    {
        name: "Tur",
        total: Math.floor(Math.random() *500)+500
    },
    {
        name: "Fri",
        total: Math.floor(Math.random() *500)+500
    },
    {
        name: "Sat",
        total: Math.floor(Math.random() *500)+500
    },
    {
        name: "Sun",
        total: Math.floor(Math.random() *500)+500
    }
]

export default function BarChar({}: Props) {
  return (
    <ResponsiveContainer width={'100%'} height={350}>
        <GraphBar data={data}>
            <XAxis dataKey={"name"} tickLine={false} axisLine={false} stroke={"#888888"} fontSize={12}/>
            <YAxis tickLine={false} axisLine={false} stroke={"#888888"} fontSize={12} tickFormatter={(value) => `${value}`}/>
            <Bar dataKey={"total"} radius={[5,5,0,0]} />
        </GraphBar>
    </ResponsiveContainer>
  )
}