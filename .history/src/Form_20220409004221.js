import React from 'react'

export default function Form() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label>   Fir:
    <input type="text" name="name" />
  </label>
            </form>
        </div>
    )
}
