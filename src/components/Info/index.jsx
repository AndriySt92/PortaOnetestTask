import React from 'react'
import './style.css'
import { findMax } from '../../helpers/findMax'
import { findAverage } from '../../helpers/findAverage'
import { findMedian } from '../../helpers/findMidian'
import { findMin } from '../../helpers/findMin'
import { findLongestIncreasingSequence } from '../../helpers/findLongestIncreasingSequence'
import { findLongestDecreasingSequence } from '../../helpers/findLongestDecreasingSequence'

export const Info = ({ numbers }) => {
  return (
    <ol className="main__info-list">
      <li className="info-list__item">
        Max number: <span>{findMax(numbers)}</span>
      </li>
      <li className="info-list__item">
        Min number: <span>{findMin(numbers)}</span>
      </li>
      <li className="info-list__item">
        Average number: <span>{findAverage(numbers)}</span>
      </li>
      <li className="info-list__item">
        Median number: <span>{findMedian(numbers)}</span>
      </li>
      <li className="info-list__item">
        Longest increasing sequence:{' '}
        <span>{findLongestIncreasingSequence(numbers).join(', ')}</span>
      </li>
      <li className="info-list__item">
        Longest decreasing sequence:{' '}
        <span>{findLongestDecreasingSequence(numbers).join(', ')}</span>
      </li>
    </ol>
  )
}
