import React, { use, useState, useEffect } from 'react';
import { Addtextbox, getCanvas } from './Studio';
import { BoldIcon, ItalicIcon, UnderlineIcon, CenterAlignIcon, LeftAlignIcon, RightAlignIcon, StrikeThroughIcon, UpperCaseIcon } from './Svg';
import ColorPicker from 'react-pick-color';
import { set } from 'react-hook-form';
import ChevronDownIcon from '@heroicons/react/20/solid/ChevronDownIcon';
import ChevronUpIcon from '@heroicons/react/20/solid/ChevronUpIcon';
import { eventNames } from 'process';
const fabric = require("fabric").fabric;

export default function StudioObject() {
    const [activeTab, setActiveTab] = useState('text');
    const [textCanavs, setTextCanavs] = useState('');
    const [color, setColor] = useState('#fff');
    const [collapseText, setCollapseText] = useState(true);
    const [collapseColor, setCollapseColor] = useState(true);
    const [collapseFontStyle, setCollapseFontStyle] = useState(true);
    const [activeObjectFontWeight, setActiveObjectFontWeight] = useState(false);
    const [activeObjectFontStyle, setActiveObjectFontStyle] = useState(false);
    const [activeObjectTextDecoration, setActiveObjectTextDecoration] = useState(false);
    const [activeObjectTextLeftAlign, setActiveObjectTextLeftAlign] = useState(false);
    const [activeObjectTextCenterAlign, setActiveObjectTextCenterAlign] = useState(false);
    const [activeObjectTextRightAlign, setActiveObjectTextRightAlign] = useState(false);
    useEffect(() => {
        if (getCanvas()) {
            const activeObject = getCanvas().getActiveObject();
            if (activeObject instanceof fabric.IText) {
                activeObject.fontWeight === 'bold' ? setActiveObjectFontWeight(true) : setActiveObjectFontWeight(false);
                activeObject.fontStyle === 'italic' ? setActiveObjectFontStyle(true) : setActiveObjectFontStyle(false);
                activeObject.textDecoration === 'underline' ? setActiveObjectTextDecoration(true) : setActiveObjectTextDecoration(false);
                checkAlignText(activeObject);
            }
        }
    }, [collapseFontStyle]);
    function textBold() {
        const activeObject = getCanvas().getActiveObject();
        if (activeObject instanceof fabric.IText) {
            activeObject.set("fontWeight", activeObject.fontWeight === 'bold' ? 'normal' : 'bold');
            activeObject.fontWeight === 'bold' ? setActiveObjectFontWeight(true) : setActiveObjectFontWeight(false);
            getCanvas().renderAll();
        }
    }
    function textItalic() {
        const activeObject = getCanvas().getActiveObject();
        if (activeObject instanceof fabric.IText) {
            activeObject.set("fontStyle", activeObject.fontStyle === 'italic' ? 'normal' : 'italic');
            activeObject.fontStyle === 'italic' ? setActiveObjectFontStyle(true) : setActiveObjectFontStyle(false);
            getCanvas().renderAll();
        }
    }
    function textUnderline() {
        const activeObject = getCanvas().getActiveObject();
        if (activeObject instanceof fabric.IText) {
            activeObject.set({ "textDecoration": activeObject.textDecoration === 'underline' ? 'none' : 'underline' });
            activeObject.textDecoration === 'underline' ? setActiveObjectTextDecoration(true) : setActiveObjectTextDecoration(false);
            getCanvas().renderAll();
        }
    }
    function textLeftAlign() {
        const activeObject = getCanvas().getActiveObject();
        if (activeObject instanceof fabric.IText) {
            activeObject.set("textAlign", activeObject.textDecoration === 'left' ? 'none' : 'left');
            checkAlignText(activeObject);
            getCanvas().renderAll();
        }
    }
    function textCenterAlign() {
        const activeObject = getCanvas().getActiveObject();
        if (activeObject instanceof fabric.IText) {
            activeObject.set("textAlign", activeObject.textDecoration === 'center' ? 'none' : 'center');
            checkAlignText(activeObject);
            getCanvas().renderAll();
        }
    }
    function checkAlignText(activeObject:any){
        activeObject.textAlign === 'left' ? setActiveObjectTextLeftAlign(true) : setActiveObjectTextLeftAlign(false);
        activeObject.textAlign === 'center' ? setActiveObjectTextCenterAlign(true) : setActiveObjectTextCenterAlign(false);
        activeObject.textAlign === 'right' ? setActiveObjectTextRightAlign(true) : setActiveObjectTextRightAlign(false);
    }
    function textRightAlign() {
        const activeObject = getCanvas().getActiveObject();
        if (activeObject instanceof fabric.IText) {
            activeObject.set("textAlign", activeObject.textDecoration === 'right' ? 'none' : 'right');
            checkAlignText(activeObject);
            getCanvas().renderAll();
        }
    }
    const ButtonArray = [
        { 'icon': BoldIcon(), 'handle': textBold, 'activeClass': activeObjectFontWeight },
        { 'icon': ItalicIcon(), 'handle': textItalic, 'activeClass': activeObjectFontStyle },
        { 'icon': UnderlineIcon(), 'handle': textUnderline, 'activeClass': activeObjectTextDecoration },
        { 'icon': LeftAlignIcon(), 'handle': textLeftAlign, 'activeClass': activeObjectTextLeftAlign },
        { 'icon': CenterAlignIcon(), 'handle': textCenterAlign, 'activeClass': activeObjectTextCenterAlign },
        { 'icon': RightAlignIcon(), 'handle': textRightAlign, 'activeClass': activeObjectTextRightAlign }
    ]
    useEffect(() => {
        console.log(color);
        if (getCanvas()) {
            const activeObject = getCanvas().getActiveObject();
            if (activeObject instanceof fabric.IText) {
                console.log('fd', activeObject);
                activeObject.set("fill", color);
                getCanvas().renderAll();
            }
        }
    }, [color]);
    function Addtext() {
        Addtextbox(textCanavs);
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'text':
                return (
                    <div className="w-full dark:bg-[#1B1C28] transition-all duration-500 ease-in-out">
                        <div className={`mb-2 ${collapseText ? 'border' : ''}`}>
                            <button className="text-white flex justify-between text-start w-full py-2 font-semibold text-md pl-1 cursor-pointer" onClick={() => setCollapseText(!collapseText)}>
                                <span>
                                    Text
                                </span>
                                {collapseText ? <ChevronDownIcon width={24} /> : <ChevronUpIcon width={24} />}
                            </button>
                            {!collapseText && (
                                <div className="flex justify-between border mt-1">
                                    <input type="text" className="w-full dark:bg-[#1B1C28] p-1 cursor" onChange={(event) => setTextCanavs(event.target.value)} />
                                    <button className="border p-2 cursor-pointer" onClick={Addtext}>Add</button>
                                </div>
                            )}
                        </div>
                        <div className={`mb-2 ${collapseColor ? 'border' : ''}`}>
                            <button className="text-white flex justify-between text-start w-full py-2 font-semibold text-md pl-1" onClick={() => setCollapseColor(!collapseColor)}>
                                <span>Colour</span>
                                {collapseColor ? <ChevronDownIcon width={24} /> : <ChevronUpIcon width={24} />}
                            </button>
                            {!collapseColor && (
                                <div id="color-picker mt-1">
                                    <ColorPicker color={color} theme={{
                                        background: 'lightgrey',
                                        inputBackground: 'grey',
                                        borderColor: 'darkgrey',
                                        borderRadius: '8px',
                                        color: 'black',
                                        width: '100%'
                                    }} onChange={color => setColor(color.hex)} />
                                </div>
                            )}
                        </div>
                        <div className={`mb-2 ${collapseFontStyle ? 'border' : ''}`}>
                            <button className="text-white flex justify-between text-start w-full py-2 font-semibold text-md pl-1" onClick={() => setCollapseFontStyle(!collapseFontStyle)}>
                                <span>
                                    Font Style
                                </span>
                                {collapseFontStyle ? <ChevronDownIcon width={24} /> : <ChevronUpIcon width={24} />}
                            </button>

                            {!collapseFontStyle && (
                                <div className="mt-1 p-2 gap-1 flex flex-wrap">
                                    {ButtonArray.map((item, index) => (
                                        <button key={index} className={`border p-2 cursor-pointer ${item.activeClass ? 'bg-pink-500 text-white' : ''}`} onClick={item.handle}>{item.icon}</button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'clipart':
                return <div className="w-full border dark:bg-[#1B1C28] p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit ab, veritatis iste accusantium fugit veniam earum perferendis consectetur laudantium optio officiis incidunt cumque molestiae voluptate sunt accusamus. Inventore, eos.</div>;
            case 'image':
                return <div className="w-full border dark:bg-[#1B1C28] p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit ab, veritatis iste accusantium fugit veniam earum perferendis consectetur laudantium optio officiis incidunt cumque molestiae voluptate sunt accusamus. Inventore, eos.</div>;
            case 'layer':
                return <div className="w-full border dark:bg-[#1B1C28] p-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit ab, veritatis iste accusantium fugit veniam earum perferendis consectetur laudantium optio officiis incidunt cumque molestiae voluptate sunt accusamus. Inventore, eos.</div>;
            default:
                return null;
        }
    };
    return (
        <div className="w-[30%] text-rose-500 p-2 transition-all duration-500 ease-in">
            <div className="flex justify-between border w-full">
                <div className={`border-r-2 flex justify-center items-center py-2 w-[25%]  ${activeTab === 'text' ? 'bg-rose-500 text-white font-bold' : 'font-semibold'}`}>
                    <button className="w-full" onClick={() => setActiveTab('text')}>Text</button>
                </div>
                <div className={`border-r-2 flex justify-center items-center py-2 w-[25%] ${activeTab === 'clipart' ? 'bg-rose-500 text-white font-bold' : 'font-semibold'}`}>
                    <button className="w-full" onClick={() => setActiveTab('clipart')}>Clipart</button>
                </div>
                <div className={`border-r-2 flex justify-center items-center py-2 w-[25%] ${activeTab === 'image' ? 'bg-rose-500 text-white font-bold' : 'font-semibold'}`}>
                    <button className="w-full" onClick={() => setActiveTab('image')}>Image</button>
                </div>
                <div className={`flex justify-center items-center py-2 w-[25%] ${activeTab === 'layer' ? 'bg-rose-500 text-white font-bold' : 'font-semibold'}`}>
                    <button className="w-full" onClick={() => setActiveTab('layer')}>Layer</button>
                </div>
            </div>
            <div className="pt-3">
                {renderTabContent()}
            </div>
        </div>
    );
}